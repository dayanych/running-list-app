import { MessageInstance } from 'antd/es/message/interface';
import { FirebaseError } from 'firebase/app';
import { User } from 'src/common/entities/user';
import { getAuthErrorMessage } from 'src/common/helpers/getAuthErrorMessage';
import { UserLoginData } from 'src/common/types/user-login-data';
import { UserRegistrationData } from 'src/common/types/user-registration-data';
import { UsersDal } from 'src/data-access-logic/user/users.dal';
import { AuthService } from 'src/service/auth/auth.service';

export class AuthDal {
  public static async login(
    loginData: UserLoginData,
    message: MessageInstance,
  ): Promise<User | null> {
    try {
      const currentUser = await AuthService.signIn(loginData);
      return UsersDal.getUser(currentUser.uid);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const messageError = getAuthErrorMessage(error);
        message.error(messageError);
      }

      return null;
    }
  }

  public static async register(
    registrationData: UserRegistrationData,
    message: MessageInstance,
  ): Promise<User | null> {
    try {
      const currentUser = await AuthService.signUp(registrationData);
      await UsersDal.createUser({
        id: currentUser.uid,
        email: registrationData.email,
        name: registrationData.name,
        taskIds: [],
      });

      return UsersDal.getUser(currentUser.uid);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const messageError = getAuthErrorMessage(error);
        message.error(messageError);
      }

      return null;
    }
  }
}

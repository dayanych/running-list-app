import { User } from 'src/common/entities/user';
import { UserLoginData } from 'src/common/types/user-login-data';
import { UserRegistrationData } from 'src/common/types/user-registration-data';
import { UsersDal } from 'src/data-access-logic/user/users.dal';
import { AuthService } from 'src/firebase/auth/auth.service';

export class AuthDal {
  public static async login({
    email,
    password,
  }: UserLoginData): Promise<User | null> {
    const currentUser = await AuthService.signIn({ email, password });

    return UsersDal.getUser(currentUser.uid);
  }

  public static async register({
    email,
    password,
    name,
  }: UserRegistrationData) {
    await AuthService.signUp({
      email,
      password,
      name,
    });

    AuthService.listenAuthStateChange();
  }
}

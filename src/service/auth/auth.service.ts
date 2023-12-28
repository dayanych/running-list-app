import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { PATH_TO_USERS_COLLECTION } from 'src/common/constants/paths';
import { UserDto } from 'src/common/dto/user.dto';
import { UserLoginData } from 'src/common/types/user-login-data';
import { UserRegistrationData } from 'src/common/types/user-registration-data';
import { app, db } from 'src/service/config/firebase.config';
import { UsersService } from 'src/service/users/users.service';

const auth = getAuth(app);

export class AuthService {
  public static signUp = async ({
    email,
    password,
  }: UserRegistrationData): Promise<User> => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential.user;
  };

  public static signIn = async ({
    email,
    password,
  }: UserLoginData): Promise<User> => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential.user;
  };

  public static listenAuthStateChange() {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        return;
      }

      if (!user.email) {
        return;
      }

      const userDocRef = doc(db, PATH_TO_USERS_COLLECTION, user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (!userDocSnapshot.exists()) {
        const newUser: UserDto = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          task_ids: [],
        };

        UsersService.createUser(newUser);
      }
    });
  }
}

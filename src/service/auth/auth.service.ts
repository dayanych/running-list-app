import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { UserLoginData } from 'src/common/types/user-login-data';
import { UserRegistrationData } from 'src/common/types/user-registration-data';
import { app } from 'src/service/config/firebase.config';

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
    });
  }
}

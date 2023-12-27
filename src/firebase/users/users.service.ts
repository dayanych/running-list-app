import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { PATH_TO_USERS_COLLECTION } from 'src/common/constants/paths';
import { db } from 'src/firebase/config/firebase.config';
import { UserDto } from 'src/firebase/users/user.dto';

export class UsersService {
  public static async getUser(id: string): Promise<UserDto | null> {
    const user = await getDoc(doc(db, PATH_TO_USERS_COLLECTION, id));
    return user.data() as UserDto;
  }
  public static async createUser(userDto: UserDto): Promise<void> {
    await setDoc(doc(db, PATH_TO_USERS_COLLECTION, userDto.id), userDto);
  }

  public static async updateUser(userDto: UserDto): Promise<void> {
    await updateDoc(doc(db, PATH_TO_USERS_COLLECTION, userDto.id), userDto);
  }
}

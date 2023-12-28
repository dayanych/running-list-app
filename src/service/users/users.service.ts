import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { PATH_TO_USERS_COLLECTION } from 'src/common/constants/paths';
import { UserDto } from 'src/common/dto/user.dto';
import { db } from 'src/service/config/firebase.config';

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

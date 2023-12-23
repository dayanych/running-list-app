import { User } from 'src/common/entities/user';
import { convertUserDtoToUser } from 'src/data-access-logic/user/converter/user-dto-to-user';
import { UsersService } from 'src/firebase/users/users.service';

export class UsersDal {
  public static async getUser(userId: string): Promise<User | null> {
    const user = await UsersService.getUser(userId);

    if (!user) {
      return null;
    }

    return convertUserDtoToUser(user);
  }
}

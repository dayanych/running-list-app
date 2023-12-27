import { User } from 'src/common/entities/user';
import { convertUserDtoToUser } from 'src/data-access-logic/user/converter/user-dto-to-user';
import { convertUserToUserDto } from 'src/data-access-logic/user/converter/user-to-user-dto';
import { UsersService } from 'src/service/users/users.service';

export class UsersDal {
  public static async getUser(userId: string): Promise<User | null> {
    const user = await UsersService.getUser(userId);

    if (!user) {
      return null;
    }

    return convertUserDtoToUser(user);
  }

  public static async createUser(user: User): Promise<void> {
    const userDto = convertUserToUserDto(user);
    await UsersService.createUser(userDto);
  }

  public static async updateUser(user: User): Promise<void> {
    const userDto = convertUserToUserDto(user);
    await UsersService.updateUser(userDto);
  }
}

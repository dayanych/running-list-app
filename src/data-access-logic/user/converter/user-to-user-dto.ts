import { UserDto } from 'src/common/dto/user.dto';
import { User } from 'src/common/entities/user';

export const convertUserToUserDto = (user: User): UserDto => {
  return {
    id: user.id,
    email: user.email,
    name: user.name ?? null,
    task_ids: user.taskIds ?? [],
  };
};

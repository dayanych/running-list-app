import { User } from 'src/common/entities/user';
import { UserDto } from 'src/firebase/users/user.dto';

export const convertUserToUserDto = (user: User): UserDto => {
  return {
    id: user.id,
    email: user.email,
    name: user.name ?? null,
    task_ids: user.taskIds ?? [],
  };
};

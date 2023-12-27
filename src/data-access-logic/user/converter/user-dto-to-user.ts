import { User } from 'src/common/entities/user';
import { UserDto } from 'src/service/users/user.dto';

export const convertUserDtoToUser = (userDto: UserDto): User => {
  return {
    id: userDto.id,
    email: userDto.email,
    name: userDto.name ?? null,
    taskIds: userDto.task_ids ?? [],
  };
};

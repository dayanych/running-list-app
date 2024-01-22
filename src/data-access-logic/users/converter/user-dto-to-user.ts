import { UserDto } from 'src/common/dto/user.dto';
import { User } from 'src/common/entities/user';

export const convertUserDtoToUser = (userDto: UserDto): User => {
  return {
    id: userDto.id,
    email: userDto.email,
    name: userDto.name ?? null,
    taskIds: userDto.task_ids ?? [],
  };
};

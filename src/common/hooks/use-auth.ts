import { useSelector } from 'react-redux';
import { selectUser } from 'src/store/slices/user';

export const useUser = () => {
  const { user } = useSelector(selectUser);

  return user;
};

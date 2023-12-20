import { useSelector } from 'react-redux';
import { selectUser } from '@/store/slices/user';

export const useUser = () => {
  const { user } = useSelector(selectUser);

  return user;
};

import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export const useLogout = () => {
  const logout = async () => {
    try {
      await signOut(auth);
      console.log('user logged out');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return { logout };
};

import { getAuth, signOut } from 'firebase/auth';
import '../firebase';
const useLogOut = () => {
  const auth = getAuth();
  function logOut() {
    return signOut(auth);
  }
  return { logOut };
};

export default useLogOut;

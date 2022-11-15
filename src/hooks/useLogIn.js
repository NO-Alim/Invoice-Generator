import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../firebase';

const useLogIn = () => {
  const auth = getAuth();
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  return { logIn };
};

export default useLogIn;

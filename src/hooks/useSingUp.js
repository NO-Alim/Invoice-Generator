import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

const useSingUp = () => {
  const auth = getAuth();
  const db = getFirestore();
  const singUp = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, 'users', user.uid), {
        bio: {
          address: '',
          website: '',
          contact: '',
          shopName: '',
          currency: '',
        },
      });
      await setDoc(doc(db, 'products', user.uid), {
        data: [],
      });
    }
  };
  return { singUp };
};

export default useSingUp;

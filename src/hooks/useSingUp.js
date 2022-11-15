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
          name: user.displayName,
          avatarUrl:
            'https://robohash.org/51f20e771c1c5876dbc9be6fa690132a?set=set4&bgset=&size=400x400',
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

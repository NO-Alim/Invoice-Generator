import { getAuth } from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../firebase';

export default function useGetCategory() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  const q = query(
    collection(db, 'mainCategory'),
    where('userFK', '==', user.uid)
  );

  useEffect(() => {
    if (user.uid) {
      setLoading(true);
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          // querySnapshot.forEach((doc) => {
          //   data.push(doc.data());
          // });
          const data = querySnapshot.docs.map((doc) => {
            const withKey = {
              key: doc.id,
              ...doc.data(),
            };
            return withKey;
          });
          setCategory(data);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );

      return unsubscribe;
    } else {
      return;
    }
  }, []);

  return { category, loading, error };
}

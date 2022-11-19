import { getAuth } from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../firebase';

export default function useGetBetweenDateTransaction(date) {
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  let q = query(
    collection(db, 'transaction'),
    where('userFK', '==', user.uid),
    orderBy('timeStamp', 'desc')
  );

  if (date) {
    q = query(q, where('timeStamp', '>=', date));
  }

  useEffect(() => {
    if (user.uid) {
      setLoading(true);
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            const withKey = {
              totalPrice: doc.data().totalPrice,
              totalItem: doc.data().totalItem,
            };
            return withKey;
          });
          console.log(data);
        },
        (error) => {
          setError(error);
        }
      );

      return unsubscribe;
    } else {
      return;
    }
  }, []);

  return { transaction, loading, error };
}

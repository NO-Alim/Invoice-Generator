import { getAuth } from 'firebase/auth';
import {
  collection,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../firebase';

export default function useGetTransaction(name, itemLimit) {
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  let q = query(
    collection(db, 'transaction'),
    where('userFK', '==', user.uid),
    // where('invoice', '==', 'invoice #2'),
    orderBy('timeStamp', 'desc'),
    limit(itemLimit)
  );

  if (name) {
    q = query(q, where('productNameArray', 'array-contains', name));
  }

  useEffect(() => {
    if (user.uid) {
      setLoading(true);
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            const withKey = {
              key: doc.id,
              ...doc.data(),
            };
            return withKey;
          });
          setTransaction(data);
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
  }, [name]);

  return { transaction, loading, error };
}

// .collection("transaction")
// .where("productsCategoryArray", "array-contains", "Food")

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
import { useSelector } from 'react-redux';
import '../firebase';

export default function useGetBetweenDateTransaction(start, end) {
  const { startDate: selectorStartDate, endDate: selectorEndDate } =
    useSelector((state) => state.headerDuration);

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;
  const today = new Date(currentDate);

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  let q = query(
    collection(db, 'transaction'),
    where('userFK', '==', user.uid),
    orderBy('timeStamp', 'desc')
  );

  if (
    selectorEndDate &&
    selectorStartDate &&
    selectorEndDate !== selectorStartDate
  ) {
    q = query(
      q,
      where('timeStamp', '>=', start < end ? start : end), //choto date
      where('timeStamp', '<=', start > end ? start : end) //boro date
    );
  }

  if (
    selectorEndDate &&
    selectorStartDate &&
    selectorEndDate === selectorStartDate
  ) {
    q = query(q, where('timeStamp', '>=', end));
  }

  if (!start && end) {
    q = query(q, where('timeStamp', '>=', end));
  }

  if (!end && start) {
    q = query(q, where('timeStamp', '>=', start));
  }

  if (!start && !end) {
    q = query(q, where('timeStamp', '>=', today));
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
              products: doc.data().products,
              key: doc.id,
            };
            return withKey;
          });
          setTransactions(data);
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
  }, [selectorEndDate, selectorStartDate]);

  return { transactions, loading, error };
}

// Query query = rootRef.child("User").child(uid).child("M3").orderByChild("timestamp").startAt(153926330482L).endAt(153927182057L)

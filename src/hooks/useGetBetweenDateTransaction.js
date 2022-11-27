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

export default function useGetBetweenDateTransaction() {
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

  //logic one
  //when start and end different
  if (
    selectorEndDate &&
    selectorStartDate &&
    selectorEndDate !== selectorStartDate
  ) {
    const bigDate =
      selectorEndDate > selectorStartDate ? selectorEndDate : selectorStartDate;
    let myDate = new Date(`${bigDate}`);
    let myDay = myDate.getDate() + 1;
    let myMonth = myDate.getMonth() + 1;
    let myYear = myDate.getFullYear();
    q = query(
      q,
      where(
        'timeStamp',
        '>=',
        selectorEndDate < selectorStartDate
          ? new Date(`${selectorEndDate}`) //end
          : new Date(`${selectorStartDate}`) //start
      ), //choto date
      where('timeStamp', '<=', new Date(`${myYear}-${myMonth}-${myDay}`)) //boro date
    );
  }

  //logic two
  //when both are same date

  if (
    selectorEndDate &&
    selectorStartDate &&
    selectorEndDate === selectorStartDate
  ) {
    let myDate = new Date(`${selectorEndDate}`);
    let myDay = myDate.getDate() + 1;
    let myMonth = myDate.getMonth() + 1;
    let myYear = myDate.getFullYear();

    q = query(
      q,
      where('timeStamp', '>=', new Date(`${selectorEndDate}`)), // >= same selected date
      where('timeStamp', '<', new Date(`${myYear}-${myMonth}-${myDay}`)) // < same selected date + 1
    );
  }

  //logic three
  //when there is no date

  if (!selectorStartDate && !selectorEndDate) {
    //if it's less then 6am should be show previous date data. because our day start from 06:00am
    if (date.getHours() < 6) {
      day = date.getDate() - 1;
    }
    q = query(
      q,
      where('timeStamp', '>=', new Date(`${year}-${month}-${day}`)), // >= same selected date - 1
      where('timeStamp', '<', today) // <= today
    );
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

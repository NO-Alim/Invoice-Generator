import { getAuth } from 'firebase/auth';
import { doc, getFirestore, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState('');

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user?.uid) {
      const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (doc) => {
        setLoading(true);
        setUserInfo(doc.data().bio);
        setLoading(false);
      });

      return unsubscribe;
    }
  });
  const updateContact = (phoneNumber) => {
    if (user?.uid) {
      const docRef = doc(db, 'users', user.uid);

      updateDoc(docRef, {
        'bio.contact': phoneNumber,
      })
        .then((docRef) => {
          setSuccess('contact updated successfully');
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  const updateWebsite = (website) => {
    if (user?.uid) {
      const docRef = doc(db, 'users', user.uid);

      updateDoc(docRef, {
        'bio.website': website,
      })
        .then((docRef) => {
          setSuccess('website updated successfully');
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  const updateAddress = (address) => {
    if (user?.uid) {
      const docRef = doc(db, 'users', user.uid);

      updateDoc(docRef, {
        'bio.address': address,
      })
        .then((docRef) => {
          setSuccess('address updated successfully');
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  const updateShopName = (shop) => {
    if (user?.uid) {
      const docRef = doc(db, 'users', user.uid);

      updateDoc(docRef, {
        'bio.shopName': shop,
      })
        .then((docRef) => {
          setSuccess('shop updated successfully');
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  const updateCurrency = (sing) => {
    if (user?.uid) {
      const docRef = doc(db, 'users', user.uid);

      updateDoc(docRef, {
        'bio.currency': sing,
      })
        .then((docRef) => {
          setSuccess('Currency updated successfully');
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  return {
    userInfo,
    loading,
    error,
    success,
    updateContact,
    updateWebsite,
    updateAddress,
    updateShopName,
    updateCurrency,
  };
};

export default useUserInfo;

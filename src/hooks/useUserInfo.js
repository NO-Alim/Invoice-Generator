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

  const contact = localStorage.getItem('contact');
  const website = localStorage.getItem('website');
  const address = localStorage.getItem('address');
  const shopName = localStorage.getItem('shopName');
  const currency = localStorage.getItem('currency');

  useEffect(() => {
    if (!contact || !website || !address || !shopName || !currency) {
      if (user?.uid) {
        const unsubscribe = onSnapshot(
          doc(db, 'users', user.uid),
          (doc) => {
            setLoading(true);
            setUserInfo(doc.data().bio);
            //
            localStorage.setItem('contact', doc.data().bio.contact);
            localStorage.setItem('website', doc.data().bio.website);
            localStorage.setItem('address', doc.data().bio.address);
            localStorage.setItem('shopName', doc.data().bio.shopName);
            localStorage.setItem('currency', doc.data().bio.currency);

            setLoading(false);
          },
          (error) => {
            setError(error);
            setLoading(false);
          }
        );

        return unsubscribe;
      }
    }
  });
  const updateContact = (phoneNumber) => {
    if (user?.uid) {
      const docRef = doc(db, 'users', user.uid);
      //set in localStorage
      localStorage.setItem('contact', phoneNumber);

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

      localStorage.setItem('website', website);

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
      localStorage.setItem('address', address);
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
      localStorage.setItem('shopName', shop);
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
      localStorage.setItem('currency', sing);

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
    loading,
    error,
    success,
    updateContact,
    updateWebsite,
    updateAddress,
    updateShopName,
    updateCurrency,
    contact,
    address,
    website,
    shopName,
    currency,
  };
};

export default useUserInfo;

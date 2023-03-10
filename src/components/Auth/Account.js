import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Account = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="bg-blue-500 text-white text-xl font-bold text-center p-1">
          Profile
        </h1>
        <div className="flex flex-col justify-center items-center">
          <h1 className="underline text-xl font-bold p-1">Profile Details</h1>
          <p className="mr-6 text-lg p-1">Email: {email}</p>
          <p className="underline text-lg font-bold p-1 text-center">
            Account Settings
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Account;

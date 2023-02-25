import React, {useState,useEffect} from 'react';
import { auth } from '../../Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {

  const [authUser, setAuthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if (user){
                setAuthUser(user);
            } else {
                setAuthUser(null)
            }
        })
    },[])

    const userSignOut = () => {
        signOut(auth).then(()=>{
            console.log('sign out successful')
        }).catch(error => console.log(error))
    }


  return (
    <div>AuthDetails</div>
  )
}

export default AuthDetails
import React from 'react'
import { useDispatch } from 'react-redux'
import { signin } from '../../features/userSlice';
import { auth, provider } from '../../firebase'
import { signInWithPopup } from "firebase/auth";
import "./login.css"


export default function Login() {
  const dispatch = useDispatch();
   


  const login = () => {
    signInWithPopup(auth, provider).then(({user}) => {
        dispatch(signin({
          displayName:user.displayName,
          photoURL:user.photoURL,
          email:user.email,
        }))

    }
    ).catch((error) => {
      alert(error)
    })
  }

  return (
    <div className='Login'>
      <img src='https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png' alt='Gmail-logo' />
      <button className='gmail-login-button' onClick={login}>Login with Gmail</button>
    </div>
  )

}



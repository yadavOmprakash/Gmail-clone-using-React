timport React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MailBody from '..//src/components/mail_body/MailBody';
import Header from '../src/components/header/Header'
import Compose from './components/compose/Compose';
import { selectSendMessageIsOpen } from './features/mailSlice';
import "./app.css"
import Login from './components/login/Login';
import { SelectUser, signin, signout } from './features/userSlice';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


function App() {


const isMessageOpen = useSelector(selectSendMessageIsOpen);
const user =useSelector(SelectUser);
const dispatch= useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
              dispatch(signin({
                displayName:user.displayName,
                photoURL:user.photoURL,
                email:user.email,
              }))
            }else{
              dispatch(signout())
            }
    })
  },[dispatch])

console.log("arrage mail in order ")

  return (
  
    <div className="App">
      
     {(user ==null)?<Login/>:
     (
     <div>
     <Header />
     <MailBody />
     {
      isMessageOpen && <Compose />
     }
     </div>)}
    </div>
  );
}

export default App;



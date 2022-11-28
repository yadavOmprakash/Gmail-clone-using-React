import React, { useEffect, useState } from 'react'
import { openMessage } from '../../../../../features/mailSlice'
import EmailBodyLeft from './EmailBodyLeft'
import EmailBodyMiddle from './EmailBodyMiddle';
import EmailBodyRight from './EmailBodyRight'
import { useDispatch } from "react-redux"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../../../../firebase'
import '../mail_body_middle.css';

function MailMiddleBodyBottom(name, subject, message, time) {
  const dispatch = useDispatch();

  const [emails, setEmails] = useState([]);
  


  useEffect(() => {
    onSnapshot(
      collection(db, "emails"),
      (snapshot) => {
        setEmails(snapshot.docs.map(doc => ({
          id: doc.id, data: doc.data()
        })))

      });
      
  }, [])




  const setMail = () => {
  
    dispatch(openMessage({
      name:name,
      subject:subject,
      message:message,
      time:time
    }))
  }
 

  return (

    <div className='Mail_middle_body_bottom' onClick={setMail}>

      {
        emails.map(({ id, data }) => {
          return <div   key={id} >
            <EmailBodyLeft name={data.fromName} />
            <EmailBodyMiddle subject={data.subject} message={data.message} />
            <EmailBodyRight time={new Date(data.timestamp?.seconds *1000).toLocaleTimeString()} />
          </div>
        })
      }
    </div>



  )

}
export default MailMiddleBodyBottom
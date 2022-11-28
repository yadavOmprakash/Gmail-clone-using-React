import React from 'react'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import TextFormatOutlinedIcon from '@mui/icons-material/TextFormatOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../compose.css'
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage } from '../../../features/mailSlice';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../../firebase';
import { SelectUser } from '../../../features/userSlice';



function ComposeBottom(props) {
  const user=useSelector(SelectUser);
  const submitTask = async (e) => {
    try {
      await addDoc(collection(db, "emails"), {
        email: props.to,
        subject: props.subject,
        message: props.message,
        from:user.email,
        fromName:user.displayName,
        timestamp: serverTimestamp()
      });
    }
    catch (error) {
      console.error(error);
    }
  }


  const dispatch = useDispatch();

  const sendButtonClciked = (e) => {
    let to = props.to
    let message = props.message
    let subject = props.subject
    props.submit(to, subject, message)

    if (props.to === "") {
      alert("To is required")
    }

    if (props.message === "") {
      alert("Message is required")
    }
    submitTask();
    
  }


  const submitted = (e) => {
    e.preventDefault();
    // submitTask();

  }



  return (
    <div className='compose-bottom'>
      <form onSubmit={(e) => { submitted() }}>

        <div className='compose-bottom-left'>
          <button type='button' onClick={() => { sendButtonClciked(); dispatch(closeSendMessage()); }}>Send<ArrowDropDownOutlinedIcon /> </button>
          <TextFormatOutlinedIcon />
          <AttachFileOutlinedIcon />
          <InsertLinkOutlinedIcon />
          <SentimentSatisfiedOutlinedIcon />
          <AddToDriveOutlinedIcon />
          <PhotoOutlinedIcon />
          <LockClockOutlinedIcon />
          <BrushOutlinedIcon />
          <MoreVertOutlinedIcon />
         
        </div>

        <div className='compose-bottom-right'>
          <DeleteOutlineOutlinedIcon />
        </div>
      </form>
    </div>
  )
}

export default ComposeBottom
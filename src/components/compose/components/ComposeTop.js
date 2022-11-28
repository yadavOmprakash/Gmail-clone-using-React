import React from 'react'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';import '../compose.css'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../../features/mailSlice';

function ComposeTop()  {
  const dispatch= useDispatch();
    return (
      <div className='compose-top'>
        <div className='compose-top-left'><p>New Message</p></div>
        <div className='compose-top-right'>
        <RemoveOutlinedIcon />
        <OpenInFullOutlinedIcon/>
        <ClearOutlinedIcon onClick={()=>dispatch(closeSendMessage())} />
        </div>
      </div>
    )
  }

export default ComposeTop
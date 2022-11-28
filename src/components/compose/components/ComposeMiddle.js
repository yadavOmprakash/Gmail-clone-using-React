import React,{ useEffect, useState } from 'react'
import '../compose.css'

function ComposeMiddle (props){
  const [to,setTo]=useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");

  
  useEffect(() => {
    props.emailState(to,subject,message);
    
  },[to,subject,message]);
  


    return (
      <div className='compose-middle'>
          <div className="middle">
            <input type="email" placeholder='Recipients' className='input-box' value={to} onChange={(e)=>{ setTo(e.target.value)}} />
            <input type="text" placeholder="Subject" className='input-box' value={subject} onChange={(e)=>{ setSubject(e.target.value)}}/>
          </div>
          <textarea rows="21" className='textbox' value={message} onChange={(e)=>setMessage(e.target.value)}/>

      </div>
    )
  
}

export default ComposeMiddle
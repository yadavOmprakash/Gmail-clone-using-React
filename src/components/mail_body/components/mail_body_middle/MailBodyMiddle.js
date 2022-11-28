import React from "react"; 
import { useNavigate } from "react-router-dom";
import MailMiddleBodyBottom from "./components/MailMiddleBodyBottom";
import MailMiddleBodyMiddle from "./components/MailMiddleBodyMiddle";
import MailMiddleBodyTop from "./components/MailMiddleBodyTop";
import './mail_body_middle.css';



function MailBodyMiddle(){
    const history = useNavigate();


    
const setMail=()=>{
history("/mail")
}
        return (
            <div className="mail-middle-body">
                <MailMiddleBodyTop />
                <MailMiddleBodyMiddle />
                <div onClick={setMail}><MailMiddleBodyBottom /></div>
            </div>
        )
    }

export default MailBodyMiddle
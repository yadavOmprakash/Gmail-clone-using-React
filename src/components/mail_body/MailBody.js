import React, { Component } from "react";
import MailBodyLeft from "./components/mail_body_left/MailBodyLeft";
import MailBodyMiddle from "./components/mail_body_middle/MailBodyMiddle";
import MailBodyRight from "./components/mail_right_body/MailBodyRight";
import './mail_body.css';

import EmailDetails from "./components/Email_details/EmailDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";


class MailBody extends Component {

    render() {
        return (
            
            <BrowserRouter>
                <div className="mail-body">
                    <MailBodyLeft />

                    <Routes>
                        <Route exact path="/" element={<MailBodyMiddle />} />
                        <Route exact path="/mail" element={<EmailDetails />} />
                    </Routes>
                    <MailBodyRight />
                </div>
            </BrowserRouter>
        )
    }
}
export default MailBody
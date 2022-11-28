import React from 'react'
import EmailBodyMiddle from '../mail_body_middle/components/EmailBodyMiddle'
import EmailDetailBottom from './components/EmailDetailBottom'
import EmailDetailsMiddle from './components/EmailDetailsMiddle'
import EmailDetailsTop from './components/EmailDetailsTop'


function EmailDetails() {
    return (
        <div className='Emaildetails'>
            <EmailDetailsTop/>
            <EmailDetailsMiddle/>
            <EmailDetailBottom />
        </div>
    )
}

export default EmailDetails
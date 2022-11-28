import React, { Component } from "react";
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import '../mail_body_middle.css'

class MailMiddleBodyMiddle extends Component {
  render() {
    return( 
    <div className="Mail_middle_body_middle">
        <div className=" heading Mail_middle_body_middle_primary">
            <InboxIcon/>
            <p>Primay</p>
        </div>
        
        <div className=" heading Mail_middle_body_middle_promotions">
            <LocalOfferIcon/>
            <p>Promotion</p>
        </div>
        <div className="heading Mail_middle_body_middle_social">
            <PeopleIcon/>
            <p>Social</p>
        </div>
        <div className="heading Mail_middle_body_middle_updates">
            <InfoIcon/>
            <p>Updates</p>
        </div>
    </div>);
  }
}

export default MailMiddleBodyMiddle;

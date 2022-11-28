import React  from "react";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './mail_body_left.css'
import MailBodyLeftSidebar from "./MailBodyLeftSidebar";
import InboxIcon from '@mui/icons-material/Inbox'; 
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../../../features/mailSlice";

function MailBodyLeft(){
 
        const dispatch = useDispatch()
        return(
            
            <div className="mail-body-left">
                 <Button startIcon={<AddIcon/>} className="compose-btn" onClick={() => dispatch(openSendMessage())}>Compose</Button>
                 <MailBodyLeftSidebar  icon={<InboxIcon/>} title="Inbox" number={44} /*isactive={true} */ />
                 <MailBodyLeftSidebar  icon={<StarOutlineIcon/>}title="Starred" number={44}/>
                 <MailBodyLeftSidebar  icon={<AccessTimeIcon/>} title="Snoozed" number={44}/>
                 <MailBodyLeftSidebar  icon={<InboxIcon/>} title="Sent" number={44}/>
                 <MailBodyLeftSidebar  icon={<InsertDriveFileOutlinedIcon/>} title="Drafts" number={44}/>
                 <MailBodyLeftSidebar  icon={<ExpandMoreOutlinedIcon/>} title="More" number={44}/>
                 <MailBodyLeftSidebar  icon={<LabelImportantOutlinedIcon/>} title="Important" number={44}/>
                 <MailBodyLeftSidebar  icon={<ChatOutlinedIcon/>} title="Chats" number={44}/>
                 <MailBodyLeftSidebar  icon={<ScheduleSendOutlinedIcon/>} title="Scheduled" number={44}/>
                 <MailBodyLeftSidebar  icon={<MarkAsUnreadOutlinedIcon/>} title="All Mail" number={44}/>
                 <MailBodyLeftSidebar  icon={<ReportOutlinedIcon/>} title="Spam" number={44}/>
                 <MailBodyLeftSidebar  icon={<DeleteOutlineOutlinedIcon/>} title="Bin" number={44}/>
                 <MailBodyLeftSidebar  icon={<LabelOutlinedIcon/>} title="Categories" number={44}/>
                 <MailBodyLeftSidebar  icon={<SettingsOutlinedIcon/>} title="Manage Labels" number={44}/>
                 <MailBodyLeftSidebar  icon={<AddOutlinedIcon/>} title="Create New Labels" number={44}/>
                 <br/>
                 <h3 className="mail-body-left-heading-label"> Labels</h3>
                 {/* <MailBodyLeftSidebar  icon={<AddOutlinedIcon/>}/> */}
                 {/* <MailBodyLeftSidebar  icon={<InboxIcon/>} title="Notes" number={44}/>
                 <MailBodyLeftSidebar  icon={<InboxIcon/>} title="SMS" number={44}/> */}
            </div>
        )
    
}

export default MailBodyLeft
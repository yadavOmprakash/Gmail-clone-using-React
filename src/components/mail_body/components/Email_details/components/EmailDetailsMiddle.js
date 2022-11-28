import React from 'react'
import { IconButton } from "@mui/material";
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import "../EmailDetails.css";
// import { useSelector } from 'react-redux';
// import { SelectedMail } from '../../../../../features/mailSlice';

function EmailDetailsMiddle() {
    // const dispatch= useDispatch();
    // const mail=useSelector(SelectedMail);
    // console.log(mail);
    return (
        <>
            <div className='EmailDetailsMiddle'>
                <div className='EmailDetailsMiddleLeft'>
                    Job | Hiring for || Node js Developer || Antino Labs || Gurgaon/Bangalore

                    <IconButton>
                        <LabelOutlinedIcon />
                    </IconButton>
                </div>
                <div className='EmailDetailsMiddleRIght'>
                    <IconButton>
                        <LocalPrintshopOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <OpenInNewOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className='EmailDetailsMiddleTwo'>
                <div className='EmailDetailsMiddleLeftTwo'>
                    <IconButton>
                        <AccountCircleOutlinedIcon />
                    </IconButton>
                    <h4>ANTINO LABS PRIVATE LIMITED</h4>
                    <span>priyanshi.jYW50aW5vLmlv@naukri.com</span>
                </div>
                <div className='EmailDetailsMiddleRIghTwo'>
                    <span> mon,15th sep 2022</span>
                    <IconButton>
                        <StarOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ReplyOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </>

    )
}

export default EmailDetailsMiddle
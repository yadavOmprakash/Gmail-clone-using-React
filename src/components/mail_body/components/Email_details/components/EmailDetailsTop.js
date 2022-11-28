import React from 'react'
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useNavigate } from "react-router-dom";
import "../EmailDetails.css"

function EmailDetailsTop() {
    let history = useNavigate()
  
    return (
        <div className='EmailDetailsTop'>
            <IconButton onClick={()=>{history('/')}}>
                <ArrowBackIcon />
            </IconButton>
            <IconButton>
                <SystemUpdateAltOutlinedIcon />
            </IconButton>
            <IconButton>
                <ReportGmailerrorredOutlinedIcon />
            </IconButton>
            <IconButton>
                <DeleteOutlinedIcon />
            </IconButton>
            <IconButton>
                <MailOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
                <AccessTimeOutlinedIcon />
            </IconButton>
            <IconButton>
                <AddTaskOutlinedIcon />
            </IconButton>
            <IconButton>
                <DriveFileMoveOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelOutlinedIcon />
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon />
            </IconButton>
        </div>
    )
}

export default EmailDetailsTop

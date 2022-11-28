import React from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton ,Avatar} from '@mui/material';
import { useSelector } from "react-redux";
import { SelectUser } from "../../../features/userSlice";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

function HeaderRight(){
    
        const user=useSelector(SelectUser)
       
        return(
            <div className="header-right">
                <IconButton>
                <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                <SettingsIcon />
                </IconButton>
                <IconButton>
                <AppsIcon />
                </IconButton>
                <Avatar src={user.photoURL} onClick={()=>signOut(auth)}  ></Avatar>
            </div>
        )
    
}

export default HeaderRight
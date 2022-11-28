import React, { Component } from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton } from '@mui/material';
class HeaderLeft extends Component{
    render(){
        return(
            <div className="header-left">
                <IconButton>
                <ReorderIcon />
                </IconButton>
                
                <img className="gmail-logo" src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png" alt="logo"></img>
            </div>
        )
    }
}

export default HeaderLeft

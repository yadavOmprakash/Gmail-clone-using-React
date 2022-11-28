import React, { Component } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class HeaderMiddle extends Component{
    render(){
        return(
            <div className="header-middle">
                <SearchIcon />
                <input placeholder="Search in emails"></input>
                <ExpandMoreIcon />
            </div>
        )
    }
}
export default HeaderMiddle
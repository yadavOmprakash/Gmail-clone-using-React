import React, { Component } from "react";
import HeaderLeft from "./components/HeaderLeft";
import HeaderMiddle from "./components/HeaderMiddle";
import HeaderRight from "./components/HeaderRight";

import './header.css';

class Header extends Component{



    render(){
        return(
            <div className="header">
                <HeaderLeft />
                <HeaderMiddle />
                <HeaderRight />
            </div>
            
        )
    }
}
export default Header;
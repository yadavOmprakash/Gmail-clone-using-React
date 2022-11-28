import React, { Component } from 'react'
import './mail_body_left_sidebar.css'

class MailBodyLeftSidebar extends Component {
    // constructor(props){
    //     super(props);

    // }
    render(){
        return(
            // <div className={`mail-body-left-sidebar ${ isactive && `mail-body-left-sidebar-active`}`}>
            <div className='mail-body-left-sidebar'>
                {/* <div> {this.props.isactive} </div> */}
                <div>{this.props.icon}</div>
                <h4> {this.props.title}</h4>
                <p> {this.props.number}</p>
            </div>
        )
    }
  
}

export default MailBodyLeftSidebar
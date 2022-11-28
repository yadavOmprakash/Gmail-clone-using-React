import React, { Component } from 'react'
import '../mail_body_middle.css'

class EmailBodyMiddle extends Component {
  render() {
    
    return (
      <div className='EmailBodyMiddle'>
        <p> <b>{this.props.subject} </b>{this.props.message}</p>
      </div>
    )
  }
}
export default EmailBodyMiddle
import React, { Component } from 'react'
import '../mail_body_middle.css'


class EmailBodyRight extends Component {
  render() {
    return (
      <div className='EmailBodyRight'>
        <p>{this.props.time} </p>

      </div>
    )
  }
}
export default EmailBodyRight
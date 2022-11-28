import React, { Component } from 'react'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import '../mail_body_middle.css'


class EmailBodyLeft extends Component {
  render() {
    return (
      <div className='EmailBodyLeft'>
        <CheckBoxOutlineBlankOutlinedIcon/>
        <StarOutlineOutlinedIcon/>
        <h4>{this.props.name}</h4>

      </div>
    )
  }
}
export default  EmailBodyLeft
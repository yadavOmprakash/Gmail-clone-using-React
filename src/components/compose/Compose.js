import React, { Component } from 'react'
import ComposeBottom from './components/ComposeBottom'
import ComposeMiddle from './components/ComposeMiddle'
import ComposeTop from './components/ComposeTop'
import './compose.css'



class Compose extends Component {
  constructor(props){
    super(props);
    this.state={
      to:"",
      subject :"",
      message :"",
    
    }
  
  }
 
  submit(to, subject, message){
    console.log(to);
    console.log(subject);
    console.log(message);
  }


  //   submitted(e){
  //   e.preventDefault();
  // }
    
 
   
  render(){
    return (
      <div className='compose'>
        {/* <form onSubmit={(e)=>{this.submitted(e)}}> */}
          <ComposeTop />
          <ComposeMiddle  emailState={(to,subject,message)=>this.setState({to:to,subject:subject,message:message})}/>
          <ComposeBottom  submit={(to,subject, message)=>this.submit(to,subject, message)} to={this.state.to} subject={this.state.subject} message={this.state.message} />
          {/* </form> */}
      </div>
    )
  }
}
export default Compose
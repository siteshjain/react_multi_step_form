import React,{Component} from 'react';
import './index.css';
 class Personal extends Component{
     continue=e=>{
         e.preventDefault();
         this.props.nextStep();
     }
     render(){
         const {handleChange,firstName,lastName,email}=this.props;
         return (
             <>
             <div className="main">
            <h2> personal information</h2>
           <label >
            <input type="text" className="input" value={firstName} required placeholder="First name" name="firstName" required onChange={handleChange('firstName')}></input><br/>
            <input type="text" className="input" value={lastName} required placeholder="Last name" name="lastName" required onChange={handleChange('lastName')}></input><br/>

            <input type="text" className="input" value={email} required placeholder="Email" name="email" required onChange={handleChange('email')}></input><br/>
            </label>
            <br/>
           <div className="next"><button className="Next" onClick={this.continue}>Next</button></div> 
            </div>
             </>
         )
     }
 }
 export default Personal;
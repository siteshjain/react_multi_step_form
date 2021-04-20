
import React,{Component} from 'react';

import Personal from './Personal';
import Details from './Details';
import Success from './Success';
import Confirm from './Confirm';
import './main.css';
export class Main extends Component{
     state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupations:'',
        city:'',
        bio:''
    }
    showStep=()=>{
        const {step,firstName,lastName,email,occupations,city,bio}=this.state;
        if(step===1)
        return <Personal
        handleChange={this.handleChange}
        nextStep={this.nextStep}
        firstName={firstName}
        lastName={lastName}
        email={email}
        

        />
        else if(step===2)
        return <Details
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            occupations={occupations}
            city={city}
            bio={bio}
        />
        if(step==3)
        return <Confirm
         prevStep={this.prevStep}
         nextStep={this.nextStep}
         firstName={firstName}
        lastName={lastName}
        email={email}
        occupations={occupations}
            city={city}
            bio={bio}

        />
        if(step==4)
        return <Success/>
    }
     nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step+1
        })
    }
     prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step-1
        })
    }
     handleChange=input=>e=>{
        this.setState({[input]:e.target.value})
    }
    render(){
        const {step}=this.state;
        return (
            <>
            <div className="bgimg">
            <div className="center">
            <h2>Step {step} of 4.</h2>
            </div>
            <div className="main">
           
            {this.showStep()}

            </div>
            </div>
            
            </>
        )
    
        
  
}
    

}
export default  Main;
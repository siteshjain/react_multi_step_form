import React, {Component} from 'react';

class Confirm extends Component{
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    submit=e=>{
        e.preventDefault();
       this.props.nextStep();
    }
    render(){
        const {firstName,lastName,email,occupations,city,bio}=this.props;
        return (
            <>
           
      <div className="main">
          <h2>Confirm</h2>
          <ul className="list-group">
              <li className="list-group-item">FirstName: <span>{firstName}</span></li>
              <li className="list-group-item">LastName: <span>{lastName}</span></li>
              <li className="list-group-item">Email: <span>{email}</span></li>
              <li className="list-group-item">Occupation: <span>{occupations}</span></li>
              <li className="list-group-item">City: <span>{city}</span></li>
              <li className="list-group-item">Bio: <span>{bio}</span></li>
          </ul>
          <button className="Prev" onClick={this.back}>Back</button>
          <div className="next"> <button className="Next" onClick={this.submit}>Submit</button></div>
      </div>

            </>
        )
    }
}
export default Confirm;
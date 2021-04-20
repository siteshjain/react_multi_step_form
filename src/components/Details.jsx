import React,{Component} from 'react';
class Details extends Component{
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {handleChange,occupations,city,bio}=this.props
        return(
            <>
            <div className="main">
            <h2>Details</h2>
           <label>
            <input type="text" className="input" value={occupations} placeholder="Occupation" required name="occupation" onChange={handleChange('occupations')}></input><br/>
            <input type="text" className="input" value={city} placeholder="City" required name="city" onChange={handleChange('city')}></input><br/>
            <input type="text" className="input" value={bio} placeholder="BioData" required name="bio" onChange={handleChange('bio')}></input><br/>
            </label>
            <br/>
            <div className="back"><button className="Prev" onClick={this.back}>Back</button></div>
            
            <div className="next"><button className="Next" onClick={this.continue}>Next</button>
            </div>
            </div>
            
            </>
        )
    }
}
export default Details;

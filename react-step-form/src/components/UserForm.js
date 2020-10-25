import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


class UserForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      step : 1,
      firstName  : '',
      lastName  : '',
      email  : '',
      occupation : '',
      city : '',
      bio : '',
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // method to proceed to the next step
  nextStep = () => {
    this.setState({
      step : this.state.step+1
    });
  }

  // method to go back to the previous step
  prevStep = () => {
    this.setState({
      step : this.state.step-1
    });
  }

  // handle field changes
  handleChange = (input) => (e) => {
    this.setState({
      [input] : e.target.value
    });
  }

  render(){
    const { step, firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch(step){
      case 1:
        return(
          <FormUserDetails
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        );
      case 2:
        return(
          <FormPersonalDetails
            nextStep={ this.nextStep }
            prevStep={ this.prevStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        );
      case 3:
        return(
          <Confirm
            nextStep={ this.nextStep }
            prevStep={ this.prevStep }
            values={ values }
          />
        );
      case 4:
          return(
            <Success />
          );
      default:
        return(
          <h1>Kuch gadbadi hua boss</h1>
        );
    }
  }
}

export default UserForm;

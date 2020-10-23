import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

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
      step : this.step+1
    });
  }

  // method to go back to the previous step
  prevStep = () => {
    this.setState({
      step : this.step-1
    });
  }

  // handle field changes
  handleChange = (input, e) => {
    this.setState({
      [input] : e.target.value
    });
  }

  render(){
    const { step, firstname, lastname, email, occupation, city, bio } = this.state;
    const values = { firstname, lastname, email, occupation, city, bio };

    switch(step){
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return(
          <h1>FormPersonalDetails</h1>
        );
      case 3:
        return(
          <h1>Confirm</h1>
        );
      case 4:
          return(
            <h1>Success</h1>
          );
    }
  }
}

export default UserForm;

import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component{

  constructor(props){
    super(props);
    this.continue = this.continue.bind(this);
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  render(){
    const { values, handleChange } = this.props;

    return(
      <MuiThemeProvider>
        <>
          <AppBar title="Enter user details" />
          <TextField
            hintText="Enter your first name"
            floatingLabelText="First name"
            onChange={ handleChange('firstName') }
            defaultValue={ values.firstname }
          />
          <br />
          <TextField
            hintText="Enter your last name"
            floatingLabelText="Last name"
            onChange={ handleChange('lastName') }
            defaultValue={ values.lastname }
          />
          <br />
          <TextField
            hintText="Enter your email"
            floatingLabelText="Email address"
            onChange={ handleChange('email') }
            defaultValue={ values.email }
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={ styles.button }
            onClick={ this.continue }
          />
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  buttons : {
    margin : 15
  }
}

export default FormUserDetails;

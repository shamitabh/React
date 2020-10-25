import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// for dropdown
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



class FormPersonalDetails extends Component{

  constructor(props){
    super(props);
    this.continue = this.continue.bind(this);
    this.back = this.back.bind(this);
  }

  // to got to the next form
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  // to go back to the previous form
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render(){
    const { values, handleChange } = this.props;

    return(
      <MuiThemeProvider>
        <>
          <AppBar title="Enter personal details" />
          <TextField
            hintText="Enter your occupation"
            floatingLabelText="Occupation"
            onChange={ handleChange('occupation') }
            defaultValue={ values.occupation }
          />
          <br />
          <br />
            <InputLabel>City</InputLabel>
            <Select
              value={ values.city }
              onChange={ handleChange('city') }
            >
              <MenuItem value="Bengaluru">Bengaluru</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Bhubaneswar">Bhubaneswar</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Kolkata">Kolkata</MenuItem>
            </Select>
          <br />
          <TextField
            hintText="Enter your bio"
            floatingLabelText="Bio"
            onChange={ handleChange('bio') }
            defaultValue={ values.bio }
          />
          <br />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={ styles.button }
            onClick={ this.back }
          />
        &nbsp; &nbsp;
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

export default FormPersonalDetails;

import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { ListItem, List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


class Confirm extends Component{

  constructor(props){
    super(props);
    this.continue = this.continue.bind(this);
    this.back = this.back.bind(this);
  }

  // to go to the next form
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM  //
    this.props.nextStep();
  }

  // to go back to the previous page
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render(){
    const { values } = this.props;

    return(
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm user details" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={values.firstName}
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={values.lastName}
            />
            <ListItem
              primaryText="Email"
              secondaryText={values.email}
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={values.occupation}
            />
            <ListItem
              primaryText="City"
              secondaryText={values.city}
            />
            <ListItem
              primaryText="Bio"
              secondaryText={values.bio}
            />
          </List>
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
            label="Confirm"
            primary={true}
            style={ styles.button }
            onClick={ this.continue }
          />
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  buttons : {
    margin : 15
  }
}

export default Confirm;

import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class Success extends Component{

  constructor(props){
    super(props);
  }


  render(){
    const { values, handleChange } = this.props;

    return(
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
            <h1>Thank you for your submission</h1>
            <p>Check your registered email for activation of your account</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;

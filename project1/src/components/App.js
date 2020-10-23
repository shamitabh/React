import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments.js';
import ListAppointments from './ListAppointments.js';
import SearchAppointments from './SearchAppointments.js';
import { without } from 'lodash';

class App extends Component{

  constructor(props){
		super(props);
		this.state = {
			myAppointment : []
		};
    this.deleteAppointment = (apt) => {
      let tempApts = this.state.myAppointment;
      tempApts = without(tempApts, apt);
      this.setState({
        myAppointment : tempApts
      })
    }
	}

	componentDidMount(){
		fetch('./data.json')
		.then(response => response.json())
		.then(result => {
			const apts = result.map( item => {
				return item;
			});
			this.setState({
				myAppointment : apts
			})
		});
	}

  render(){
    return(
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments
                  appointments={ this.state.myAppointment  }
                  deleteAppointment={ this.deleteAppointment }
                  />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

import React, { Component } from 'react';


class ListAppointments extends Component{
	constructor(props){
		super(props);
		this.state = {
			myAppointment : []
		};
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
			<div>
				<table className="table-dark table-bordered table-responsive text-center" cellpadding="5">
					<thead>
				    <tr>
							<th>Sl no.</th>
							<th>Pet Name</th>
							<th>Owner Name</th>
							<th>Appointment note</th>
							<th>Appointment date</th>
							<th>Action</th>
				    </tr>
				  </thead>
					<tbody>
						{ this.state.myAppointment.map( (item, i) => (
							<tr key={i}>
								<td>{ i }</td>
								<td>{ item.petName }</td>
								<td>{ item.ownerName }</td>
								<td>{ item.aptNotes }</td>
								<td>{ item.aptDate }</td>
								<td><button type="button" class="btn btn-close btn-primary">X</button></td>
							</tr>
						)) }
					</tbody>
				</table>
			</div>
		);
	}
}

export default ListAppointments;

import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component{

	render(){
		return(
			<div>
				<table className="table-dark table-bordered text-center" cellPadding="5">
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
						{ this.props.appointments.map( (item, i) => (
							<tr key={i}>
								<td>{ i }</td>
								<td>{ item.petName }</td>
								<td>{ item.ownerName }</td>
								<td>{ item.aptNotes }</td>
								<td>
									<Moment
										date={ item.aptDate }
										parse="YYYY-MM-DD hh:mm"
										format="MMM-D h:mma"
									/>
							</td>
								<td><button type="button" className="btn btn-sm btn-primary"
									onClick={() => this.props.deleteAppointment(item)}>
									<FaTimes />
								</button></td>
							</tr>
						)) }
					</tbody>
				</table>
			</div>
		);
	}
}

export default ListAppointments;

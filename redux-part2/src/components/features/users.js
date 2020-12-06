import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/users";

class User extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        {this.props.userData.loading ? (
          <h2>Loading</h2>
        ) : this.props.userData.error ? (
          <h2>{this.props.userData.error}</h2>
        ) : (
          <div>
            <h2>User list</h2>
            <div>
              {this.props.userData &&
                this.props.userData.users &&
                this.props.userData.users.map((user) => <p>{user.name}</p>)}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);

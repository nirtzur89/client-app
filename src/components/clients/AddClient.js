import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//import { compose } from "redux";
//import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const newClient = this.state;

    const { firestore } = this.props;

    if (newClient.balance === "") {
      newClient.balance = 0;
    }

    firestore
      .add({ collection: "clients" }, newClient)
      .then(() => this.props.history.push("/"));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlfor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.firstName}
                />
              </div>

              <div className="form-group">
                <label htmlfor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.lastName}
                />
              </div>

              <div className="form-group">
                <label htmlfor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>

              <div className="form-group">
                <label htmlfor="phone">phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  minLength="6"
                  required
                  onChange={this.onChange}
                  value={this.state.phone}
                />
              </div>

              <div className="form-group">
                <label htmlfor="balance">Balance</label>
                <input
                  type="text"
                  className="form-control"
                  name="balance"
                  onChange={this.onChange}
                  value={this.state.balance}
                />
              </div>
              <input
                type="submit"
                value="submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddClient);

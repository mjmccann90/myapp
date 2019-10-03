import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <i className="fas fa-user fa-5x"></i>
          </picture>
          <h3>Name: <span className="card-employee">{this.props.employee.name}</span></h3>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Terminate</button>
          <button type="button" onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
        </div>
      </div>
    );
  }
}
export default EmployeeCard;
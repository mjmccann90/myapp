import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <i className="fas fa-user fa-5x"></i>
          </picture>
          <h3>Name: <span className="card-owner">{this.props.owner.name}</span></h3>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove</button>
          <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LocationCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <i className="fas fa-map-marker-alt"></i>
          </picture>
          <h3>Name: <span className="card-location">{this.props.location.name}</span></h3>
          <p>Breed: {this.props.location.address}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Be Gone</button>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.location.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;
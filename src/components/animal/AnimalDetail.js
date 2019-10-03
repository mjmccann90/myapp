import React, { Component } from 'react';
import './AnimalDetail.css'
import helpers from "../../modules/helpers";

class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        imgUrl: "",
        employeeId:"",
        loadingStatus: true,
    }

    handleDelete = () => {
      //invoke the delete function in AnimalManger and re-direct to the animal list.
      this.setState({loadingStatus: true})
      helpers.delete("animal", this.props.animalId)
      .then(() => this.props.history.push("/animals"))
  }

    componentDidMount(){
        console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        helpers.get("animal", this.props.animalId)
        .then((animal) => {
            this.setState({
                name: animal.name,
                breed: animal.breed,
                imgUrl:animal.url,
                employeeId:animal.employeeId,
                loadingStatus: false
            });
        });
    }

    render() {
      if (this.state.loadingStatus)
        return <p>Loaing...</p>;

      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require(`./Images/${this.state.imgUrl}`)} alt="My Dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }
}

export default AnimalDetail;
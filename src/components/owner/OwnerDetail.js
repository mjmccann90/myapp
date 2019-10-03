import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

class OwnerDetail extends Component {

    state = {
        name: "",
        loadingStatus: true
    }

    handleDelete = () => {
      //invoke the delete function in EmployeeManger and re-direct to the owner list.
      this.setState({loadingStatus: true})
      OwnerManager.delete(this.props.ownerId)
      .then(() => this.props.history.push("/owners"))
  }

    componentDidMount(){
        console.log("OwnerDetail: ComponentDidMount");
        //get(id) from OwnerManager and hang on to that data; put it into state
        OwnerManager.get(this.props.ownerId)
        .then((owner) => {
            this.setState({
                name: owner.name,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
                <i className="fas fa-user fa-5x"></i>
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Terminate</button>
          </div>
        </div>
      );
    }
}

export default OwnerDetail;
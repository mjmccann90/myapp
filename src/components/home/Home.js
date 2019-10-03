import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <>
      <address>
        Visit Us at the Nashville North Location
        <br />500 Puppy Way
      </address>
      <div className="card">
        <picture>
          <img class="huerotate" src={require('./Stella.jpg')} alt="My Dog" />
        </picture>
      </div>
      </>
    )
  }
}

export default Home
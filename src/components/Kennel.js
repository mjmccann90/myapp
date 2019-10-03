import React, { Component } from 'react'
import './Kennel.css'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'
import AnimalCard from './animal/AnimalCard'
import EmployeeCard from './Employee/EmployeeCard'
import OwnerCard from './owner/OwnerCard'
import LocationCard from './Location/LocationCard'

class Kennel extends Component {
            render() {
                return (
                  <>
                    <NavBar />
                    <ApplicationViews />
                  </>
                )
              }
            }


export default Kennel
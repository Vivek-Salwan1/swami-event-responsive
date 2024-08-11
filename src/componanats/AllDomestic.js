import React from 'react'
import Navbar from '../common/Navbar'
import { Allstates } from '../data/states'
import '../styles/allDomestic.css'
import { Link } from 'react-router-dom'
import '../App.css'
import boxBg from '../images/allstatebg.jpeg'

function AllDomestic() {
  return (
    <div className='allDPage'>

      <Navbar /><br />
      <h1 style={{ textAlign: 'center' }}>All Domestic packages</h1>
      <div className="allDomesticPage">

        <div className="allStates" style={{ backgroundImage: `url(${boxBg})` }}>
          {
            Allstates.map((state, i) => {
              return (
                <Link to={`/DomesticCardDetails/${state}`}>  <button className='stateBtn'>{state}</button></Link>
              )
            })
          }



        </div>


      </div><br /><br /><br /><br />

    </div>
  )
}

export default AllDomestic

import React from 'react'
import Navbar from '../common/Navbar'
import { Link } from 'react-router-dom'
import { Countries } from '../data/internDest'
import '../styles/allDomestic.css'
import '../App.css'
import boxBg from '../images/allstatebg.jpeg'

function AllInternational() {
  return (
    <div className='allDPage'>
       
      <Navbar /><br />
      <h1 style={{textAlign:'center'}}>All International Packages</h1>
      <div className="allDomesticPage" >
         
        <div className="allStates" style={{backgroundImage: `url(${boxBg})`}} >
          {
            Countries.map((country, i) => {
              return (
                <Link to={`/InterCardDetails/${country}`}>  <button className='stateBtn'>{country}</button></Link>
              )
            })
          }
        </div>


      </div><br/><br/><br/>
    </div>
  )
}

export default AllInternational

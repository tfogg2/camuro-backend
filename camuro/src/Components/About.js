import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'

class About extends Component {
  render(){
    return(
      <div className="about">
        <div className="about-copy">
          <img src={require('../Assets/mission3.svg')} alt="mission" />
          <p>Our mission here at camuro.co is to keep the film community alive, one restoration at a time. Interested in selling some unwanted gear while giving back to the film community? <Link to="/offer">Fill out an offer form</Link> and we'll get back to you with a quote.</p>
        </div>
      </div>
    )
  }
}

export default About;

import React, { Component } from 'react'
import HomeCta from './HomeCta.js'
import Products from '../Products/Products.js'
import Gallery from '../Gallery'
import About from '../About'
import OfferForm from '../Offers/OfferForm'
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Fade from 'react-reveal/Fade'
import _ from 'lodash'
import scrollToComponent from 'react-scroll-to-component'
import Footer from '../Footer.js'
import Carousel from '../Products/Carousel'



class Home extends Component {

  state = {
    loaded: false
  }
  componentDidMount() {
    _.delay( () => {
      this.setState({
        loaded: true
      })
    }, 200 )
    const about = document.getElementById('about')
  }

  render(){
    const homeClass = this.state.loaded ? 'home-bg visible' : 'home-bg'
    const limit = 9
    return(
      <div className="home">
        <div className="splash-background">
          <div className={homeClass}></div>
        </div>
        <HomeCta about={this.About} />
        
        <div className="content">
          <About offer={this.OfferForm} ref={(section) => { this.About = section; }}/>
          <div className="home-gallery" ref={(section) => { this.Gallery = section; }}>
            <div className='home-content'>
              <Gallery limit={limit} path="/"/>
              <Link to="/gallery" alt="Gallery" style={{color: '#c6574a', fontSize: '20px'}}>
                More
              </Link>
            </div>
          </div>
          <div className="home-offer">
            <h1>We Sell Clean Cameras</h1>
            <p>We're constantly adding to our collection and are excited to begin sharing it here. Our cameras come professionally cleaned so you can focus on what's important.</p>
            <Link to="/products" alt="Products">
              <button className="gallery-btn">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

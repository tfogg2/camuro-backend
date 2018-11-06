import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
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
import FilmPool from './FilmPool'



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

    const images = [
      {
        original: require('../../Assets/nikon-gallery.png'),
        thumbnail: require('../../Assets/nikon-gallery.png')
      },
      {
        original: require('../../Assets/Products/olympusOm1-8.png'),
        thumbnail: require('../../Assets/Products/olympusOm1-8.png')
      },
      {
        original: require('../../Assets/canon-gallery.png'),
        thumbnail: require('../../Assets/canon-gallery.png')
      },
      {
        original: require('../../Assets/Products/nikkor35-3.png'),
        thumbnail: require('../../Assets/Products/nikkor35-3.png')
      },
      {
        original: require('../../Assets/pentax-gallery.png'),
        thumbnail: require('../../Assets/pentax-gallery.png')
      },
      {
        original: require('../../Assets/Products/minolta7-1.png'),
        thumbnail: require('../../Assets/Products/minolta7-1.png')
      },
      {
        original: require('../../Assets/Products/leicaSummi40-4.png'),
        thumbnail: require('../../Assets/Products/leicaSummi40-4.png')
      },
      {
        original: require('../../Assets/konica-gallery.png'),
        thumbnail: require('../../Assets/konica-gallery.png')
      },
      {
        original: require('../../Assets/Products/leicaSummi50-4.png'),
        thumbnail: require('../../Assets/Products/leicaSummi50-4.png')
      },
      {
        original: require('../../Assets/Products/fujiGW-1.png'),
        thumbnail: require('../../Assets/Products/fujiGW-1.png')
      },
      {
        original: require('../../Assets/mamiya-gallery.png'),
        thumbnail: require('../../Assets/mamiya-gallery.png')
      },
    ]


    const homeClass = this.state.loaded ? 'home-bg visible' : 'home-bg'
    const limit = 12
    return(
      <div className="home">
        <div className="splash-background">
          <div className={homeClass}></div>
        </div>
        <HomeCta about={this.About} />
        <div className="split-section">
          <Carousel addProduct={this.props.addProduct}/>
          <FilmPool />
        </div>
        <div className="content">
          <div className="home-gallery" ref={(section) => { this.Gallery = section; }}>
            <div className='home-content'>
              <Gallery limit={limit} path="/"/>
            </div>
          </div>
          <div className="home-offer">
            <h1><span>Camuro</span> Cameras</h1>
            <p>We're constantly adding to our collection and are excited to begin sharing it here. Our cameras come professionally cleaned so you can focus on what's important.</p>
            <div className="offer-gallery">
              <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} />
            </div>
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

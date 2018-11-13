import React, {Component} from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import Insta from './Insta'
import Fade from 'react-reveal/Fade'
import _ from 'lodash'




class InstaGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY,
      loaded: false
    }
  }

  componentDidMount() {
    const { data: allPhotos = [] } = GALLERY;
    this.setState({ allPhotos });
    _.delay( () => {
      this.setState({
        loaded: true
      })
      window.scrollTo(0, 0)
    }, 100 )
  }

  render(){
    const galleryClass = this.state.loaded ? 'insta-gallery-items visible' : 'insta-gallery-items'

    const UI = ({ state, state: { gallery },  }) => (
        <div className="gallery">
          <div className="gallery-header">
            <img src={require('../Assets/photos.svg')} alt="photos" />
            <div className="gallery-forward-arrow">
              <Link to="/gallery">
                <img src={require('../Assets/forward-arrow.svg')} alt="forward-arrow"/>
              </Link>
            </div>
            <div>
              <p>
                <Link to="/gallery/insta">
                  <span>Photos for the people.</span>
                </Link><br />
                <Link to="/gallery">By the people.</Link>
              </p>
            </div>
          </div>
          <div className={galleryClass}>
            <Insta />
          </div>
        </div>
      )

    return <UI state={this.state}  />

  }
}

const GALLERY = []

export default InstaGallery;

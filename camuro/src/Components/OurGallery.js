import React, {Component} from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import Insta from './Insta'




class OurGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    const galleryClass = this.state.loaded ? 'gallery-items visible' : 'gallery-items'

    const UI = ({ state, state: { gallery },  }) => (
        <div className="gallery">
          <div className="gallery-header">
            <img src={require('../Assets/photos.svg')} alt="photos" />
            <div>
              <p>
                <Link to="/gallery/ours">
                  <span>Photos for the people.</span>
                </Link><br />
                <Link to="/gallery">By the people.</Link>
              </p>
            </div>
          </div>
          <Insta />
        </div>
      )

    return <UI state={this.state}  />

  }
}

const GALLERY = []

export default OurGallery;
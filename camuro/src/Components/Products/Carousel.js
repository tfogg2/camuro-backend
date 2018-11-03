import React, { PropTypes, Component } from 'react'
import FeaturedProducts from './FeaturedProducts'

class Carousel extends Component {
  render() {
    return (
      <div className="wrapper">
        <FeaturedProducts addProduct={this.props.addProduct}/>
      </div>
    )
  }
}

export default Carousel

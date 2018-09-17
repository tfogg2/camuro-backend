import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'


class ProductGallery extends Component {
  render(){

    return(
      <div className="product-gallery">
        <ImageGallery items={this.props.images} />
      </div>
    )
  }
}


export default ProductGallery;

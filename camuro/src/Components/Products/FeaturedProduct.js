import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import ProductModal from './ProductModal'

class FeaturedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  stopClose = (e) => {
    e.stopPropagation()
  }

  render(){
    return(
      <div className='featured-product' onClick={this.toggleModal}>
        <div>
          <div className="featured-product-image">
            <img src={this.props.image}/>
            <h2>{this.props.title}</h2>
          </div>
        </div>
        <div>
          {this.state.isOpen ?
            <div className='backdrop product-backdrop'>
              <div className="modal-header">
                <span className="close-modal" onClick={this.toggleModal}><img src={require('../../Assets/back-arrow.svg')} alt="back-arrow"/></span>
              </div>
              <div className="modal-items">
                <ProductModal show={this.state.isOpen} onClose={this.toggleModal} addProduct={this.props.addProduct} stopClose={this.stopClose} product={this.state.activeProduct}  sold={this.props.sold} images={this.props.images} image={this.props.image} title={this.props.title} description={this.props.description} price={this.props.price}></ProductModal>
              </div>
            </div>
          : null}
        </div>
      </div>
    )
  }

}

export default FeaturedProduct

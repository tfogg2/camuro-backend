import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import ProductModal from './ProductModal'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
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
    const productClass = this.props.sold ? 'product-hover sold' : 'product-hover'
    const soldLabel = this.props.sold ? 'soldLabel visible' : 'soldLabel'
    return(
      <div className='product' onClick={this.toggleModal}>
        <h1 className={soldLabel}>Sold</h1>
        <div className={productClass}>
          <div className="product-image">
            <img src={this.props.image}/>
          </div>
          <div className="product-description">
            <div className="description-text">
              <div>
                <h2>{this.props.title}</h2>
              </div>

            </div>
            <div className="description-cta">
              <div className="product-price">
                <span><b>${this.props.price}</b></span>
              </div>

            </div>
          </div>
        </div>
        <div>
          {this.state.isOpen ?
            <div className='backdrop product-backdrop'>
              <div className="modal-header">
                <span className="close-modal" onClick={this.toggleModal}><img src={require('../../Assets/back-arrow.svg')} alt="back-arrow"/></span>
              </div>
              <div className="modal-items">
                <ProductModal show={this.state.isOpen} onClose={this.toggleModal} addProduct={this.props.addProduct} stopClose={this.stopClose} product={this.state.activeProduct} images={this.props.images} image={this.props.image} title={this.props.title} description={this.props.description} price={this.props.price}></ProductModal>
              </div>
            </div>
          : null}
        </div>
      </div>
    )
  }

}

export default Product

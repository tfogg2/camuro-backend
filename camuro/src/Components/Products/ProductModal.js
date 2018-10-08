import React, {Component} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import ProductGallery from './ProductGallery'

class ProductModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    _.delay( () => {
      this.setState({
        loaded: true
      })
    }, 200 )

    window.scrollTo(0, 0)
  }


  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    const modalClass = this.state.loaded ? 'visible-item product-modal modal' : 'modal'

    return (
      <div className={modalClass} onClick={this.props.stopClose}>
        <ProductGallery images={this.props.images} />
        <div className="product-info">
          <h2 className="modal-header-title">{this.props.title}</h2>
          <span><b>${this.props.price}</b></span>
          <p>{this.props.description}</p>
          <ul>
            <label><b>Mechanics:</b></label><br />
            <li>Focus: Smooth throughout </li>
            <li>Diaphragm: Clean & dry with snappy action-no oil </li>
            <li>Shutter: Speeds accurate throughout the range </li>
            <li>Film Transport: Clean and accurate. 36-40 frames possible. Film advance in strong and smooth throughout.</li>
            <li>Light Seals: New</li>
            <li>Meter: Functional and accurate </li>
            <li>Viewfinder: Big, clean and bright</li><br />
            <label><b>Optics:</b></label><br />
            <li>Clean, clear and bright</li>
            <li>No fungus, haze, scratches, separation or pitting</li>
            <li>Coatings are clean and bright on front & rear</li>
            <li>Minimal to no dust-CLA possible depending on model</li>
          </ul>

          {this.props.sold ?
            null
          :
            <Link to={`/cart`} className="add-product" onClick={ () => this.props.addProduct(this.props.title, this.props.product, this.props.description, this.props.price, this.props.index, this.props.image)}>
              <button className="addProductBtn">Add Product</button>
            </Link>
          }


        </div>
      </div>
    );
  }
}

ProductModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ProductModal;

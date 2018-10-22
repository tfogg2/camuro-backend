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
    const opticClass= this.props.optics.length > 1 ? '' : 'invisible'
    const mechanicClass= this.props.mechanics.length > 1 ? '' : 'invisible'

    return (
      <div className={modalClass} onClick={this.props.stopClose}>
        <ProductGallery images={this.props.images} />
        <div className="product-info">
          <h2 className="modal-header-title">{this.props.title}</h2>
          <span><b>${this.props.price}</b></span>
          <p>{this.props.description.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>
          })}</p>
          <ul>
            <div className={mechanicClass}>
              <label><b>Mechanics:</b></label><br />
              {this.props.mechanics.split('\n').map((item, key) => {
                return <li key={key}>{item}<br/></li>
              })}
            </div>
            <div className={opticClass}>
              <br /><label><b>Optics:</b></label><br />
              {this.props.optics.split('\n').map((item, key) => {
                return <li key={key}>{item}<br/></li>
              })}
            </div>
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

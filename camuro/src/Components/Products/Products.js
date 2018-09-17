import React, { Component } from 'react'
import Product from './Product.js'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import _ from 'lodash'
import ProductModal from './ProductModal'

const ListCategories = (productCategories, setCategory ) => (
  productCategories.map((category) => {
    const cat = category === "All" ? '' : category
    return (
      <li>
        <NavLink exact="true" to={'/products/' + cat} key={category} className={`${category}`} onClick={() => setCategory(category)}>
          {category}
        </NavLink>
      </li>
    )
  })
)

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "All",
      products: PRODUCTS,
      addProduct: this.props.addProduct,
      productCategories: PRODUCT_CATEGORIES,
      isOpen: false
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    })
  }
  setProduct(category, title, description) {
    this.setState({
      category: category
    })
  }

  // MODAL
  toggleModal = (e) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    e.preventDefault()
  }
  stopClose = (e) => {
    e.stopPropagation()
  }


  render() {
    const productClass = this.state.isOpen ? 'invisible' : ''
    const ProductItems = ({ state: { products, displayCategory } }) => (
      <div>
        {products
          .filter(
            ({ category }) =>
              displayCategory === category || displayCategory === "All"
          )
          .map(({ product, category, title, description, price, index, image, images }) => (
            <div className="product-box">
              <div>
                <Product key={`ProductItems-${title}`} toggleModal={this.toggleModal} isOpen={this.state.isOpen} product={product} images={images} image={image} index={index} category={category} title={title} description={description} price={price} addProduct={this.props.addProduct} />
              </div>
            </div>
          ))}
      </div>
    )
    const UI = ({
      state,
      state: { productCategories, products },
      setCategory,
      AllProducts,
    }) => (
      <div className="content product-content">
        <div className='header-box'>
          <div className="products-header">
            <h1>Shop Now!</h1>
            <ul className="product-nav">
              {ListCategories(productCategories, setCategory )}
            </ul>
          </div>
        </div>
        <div className="products">
          <ProductItems state={state} />
        </div>
      </div>
    )
    return <UI setCategory={this.setCategory} state={this.state} className />
  }
}

// data
const PRODUCTS = [
  { image: require('../../Assets/Products/olympus-1.png'),
    images: [
      {original: require('../../Assets/Products/olympus-1.png'), thumbnail: require('../../Assets/Products/olympus-1-small.png')},
      {original: require('../../Assets/Products/olympus-2.png'), thumbnail: require('../../Assets/Products/olympus-2-small.png')},
      {original: require('../../Assets/Products/olympus-3.png'), thumbnail: require('../../Assets/Products/olympus-3-small.png')},
      {original: require('../../Assets/Products/olympus-4.png'), thumbnail: require('../../Assets/Products/olympus-4-small.png')},
      {original: require('../../Assets/Products/olympus-5.png'), thumbnail: require('../../Assets/Products/olympus-5-small.png')},
      {original: require('../../Assets/Products/olympus-6.png'), thumbnail: require('../../Assets/Products/olympus-6-small.png')},
      {original: require('../../Assets/Products/olympus-7.png'), thumbnail: require('../../Assets/Products/olympus-7-small.png')},
      {original: require('../../Assets/Products/olympus-8.png'), thumbnail: require('../../Assets/Products/olympus-8-small.png')},
      {original: require('../../Assets/Products/olympus-9.png'), thumbnail: require('../../Assets/Products/olympus-9-small.png')},
    ],
    title: "Olympus XA",
    description: "This is an example description about some camera shenanigans.",
    category: "Bodies",
    price: 199
  },

  { image: require("../../Assets/CanonSun.png"),
    images: [
      {original: require('../../Assets/Contax.png'), thumbnail: require('../../Assets/Contax.png')},
      {original: require('../../Assets/Contax.png'), thumbnail: require('../../Assets/Contax.png')},
      {original: require('../../Assets/Contax.png'), thumbnail: require('../../Assets/Contax.png')}
    ],
    title: "Hello",
    description: "This is an example description about some camera shenanigans.",
    category: "Lenses",
    price: 100
  },

  { image: require("../../Assets/CanonSun.png"),
    images: [
      {original: require('../../Assets/Contax.png'), thumbnail: require('../../Assets/Contax.png')},
      {original: require('../../Assets/Contax.png'), thumbnail: require('../../Assets/Contax.png')},
      {original: require('../../Assets/Contax.png'), thumbnail: require('../../Assets/Contax.png')}
    ],
    title: "World",
    description: "This is an example description about some camera shenanigans.",
    category: "Lenses",
    price: 100
  },

]

const uniqueItems = (x, i, array) => array.indexOf(x) === i
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
)

PRODUCT_CATEGORIES.push("All")
PRODUCT_CATEGORIES.sort()

export default Products

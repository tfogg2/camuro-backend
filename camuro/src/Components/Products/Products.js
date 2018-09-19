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
      productCategories: PRODUCT_CATEGORIES
    };
    this.setCategory = this.setCategory.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0, 0)
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

  render() {
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
  { image: require('../../Assets/Products/nikonf3-1.png'),
    images: [
      {original: require('../../Assets/Products/nikonf3-1.png'), thumbnail: require('../../Assets/Products/nikonf3-1-small.png')},
      {original: require('../../Assets/Products/nikonf3-2.png'), thumbnail: require('../../Assets/Products/nikonf3-2-small.png')},
      {original: require('../../Assets/Products/nikonf3-3.png'), thumbnail: require('../../Assets/Products/nikonf3-3-small.png')},
      {original: require('../../Assets/Products/nikonf3-4.png'), thumbnail: require('../../Assets/Products/nikonf3-4-small.png')},
      {original: require('../../Assets/Products/nikonf3-5.png'), thumbnail: require('../../Assets/Products/nikonf3-5-small.png')},
      {original: require('../../Assets/Products/nikonf3-6.png'), thumbnail: require('../../Assets/Products/nikonf3-6-small.png')},
      {original: require('../../Assets/Products/nikonf3-7.png'), thumbnail: require('../../Assets/Products/nikonf3-7-small.png')},
      {original: require('../../Assets/Products/nikonf3-8.png'), thumbnail: require('../../Assets/Products/nikonf3-8-small.png')},
      {original: require('../../Assets/Products/nikonf3-9.png'), thumbnail: require('../../Assets/Products/nikonf3-9-small.png')},
      {original: require('../../Assets/Products/nikonf3-10.png'), thumbnail: require('../../Assets/Products/nikonf3-10-small.png')}
    ],
    title: "Nikon F3-CLA’d w/ Tamron Strap",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 329
  },

  { image: require('../../Assets/Products/nikon-4.png'),
    images: [
      {original: require('../../Assets/Products/nikon-4.png'), thumbnail: require('../../Assets/Products/nikon-4-small.png')},
      {original: require('../../Assets/Products/nikon-2.png'), thumbnail: require('../../Assets/Products/nikon-2-small.png')},
      {original: require('../../Assets/Products/nikon-3.png'), thumbnail: require('../../Assets/Products/nikon-3-small.png')},
      {original: require('../../Assets/Products/nikon-1.png'), thumbnail: require('../../Assets/Products/nikon-1-small.png')},
      {original: require('../../Assets/Products/nikon-5.png'), thumbnail: require('../../Assets/Products/nikon-5-small.png')},
      {original: require('../../Assets/Products/nikon-6.png'), thumbnail: require('../../Assets/Products/nikon-6-small.png')},
      {original: require('../../Assets/Products/nikon-7.png'), thumbnail: require('../../Assets/Products/nikon-7-small.png')},
      {original: require('../../Assets/Products/nikon-8.png'), thumbnail: require('../../Assets/Products/nikon-8-small.png')},
      {original: require('../../Assets/Products/nikon-9.png'), thumbnail: require('../../Assets/Products/nikon-9-small.png')},
      {original: require('../../Assets/Products/nikon-10.png'), thumbnail: require('../../Assets/Products/nikon-10-small.png')},
      {original: require('../../Assets/Products/nikon-11.png'), thumbnail: require('../../Assets/Products/nikon-11-small.png')}
    ],
    title: "Nikkor 50mm f1.4 AI-S Lens w/ Cap & Filter",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Lenses",
    price: 189
  },

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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Pocket Cameras",
    price: 199
  },

  { image: require('../../Assets/Products/olympus2-7.png'),
    images: [
      {original: require('../../Assets/Products/olympus2-7.png'), thumbnail: require('../../Assets/Products/olympus2-7-small.png')},
      {original: require('../../Assets/Products/olympus2-2.png'), thumbnail: require('../../Assets/Products/olympus2-2-small.png')},
      {original: require('../../Assets/Products/olympus2-3.png'), thumbnail: require('../../Assets/Products/olympus2-3-small.png')},
      {original: require('../../Assets/Products/olympus2-4.png'), thumbnail: require('../../Assets/Products/olympus2-4-small.png')},
      {original: require('../../Assets/Products/olympus2-5.png'), thumbnail: require('../../Assets/Products/olympus2-5-small.png')},
      {original: require('../../Assets/Products/olympus2-6.png'), thumbnail: require('../../Assets/Products/olympus2-6-small.png')},
      {original: require('../../Assets/Products/olympus2-1.png'), thumbnail: require('../../Assets/Products/olympus2-1-small.png')},
      {original: require('../../Assets/Products/olympus2-8.png'), thumbnail: require('../../Assets/Products/olympus2-8-small.png')},
      {original: require('../../Assets/Products/olympus2-9.png'), thumbnail: require('../../Assets/Products/olympus2-9-small.png')},
      {original: require('../../Assets/Products/olympus2-10.png'), thumbnail: require('../../Assets/Products/olympus2-10-small.png')},
      {original: require('../../Assets/Products/olympus2-11.png'), thumbnail: require('../../Assets/Products/olympus2-11-small.png')},
      {original: require('../../Assets/Products/olympus2-12.png'), thumbnail: require('../../Assets/Products/olympus2-12-small.png')},
      {original: require('../../Assets/Products/olympus2-13.png'), thumbnail: require('../../Assets/Products/olympus2-13-small.png')},
    ],
    title: "Olympus OM 28mm f3.5 w/ original Caps, Case & Hood",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Lenses",
    price: 89
  },

  { image: require('../../Assets/Products/om-1.png'),
    images: [
      {original: require('../../Assets/Products/om-1.png'), thumbnail: require('../../Assets/Products/om-1-small.png')},
      {original: require('../../Assets/Products/om-2.png'), thumbnail: require('../../Assets/Products/om-2-small.png')},
      {original: require('../../Assets/Products/om-3.png'), thumbnail: require('../../Assets/Products/om-3-small.png')},
      {original: require('../../Assets/Products/om-4.png'), thumbnail: require('../../Assets/Products/om-4-small.png')},
      {original: require('../../Assets/Products/om-5.png'), thumbnail: require('../../Assets/Products/om-5-small.png')},
      {original: require('../../Assets/Products/om-6.png'), thumbnail: require('../../Assets/Products/om-6-small.png')},
      {original: require('../../Assets/Products/om-7.png'), thumbnail: require('../../Assets/Products/om-7-small.png')},
      {original: require('../../Assets/Products/om-8.png'), thumbnail: require('../../Assets/Products/om-8-small.png')},
      {original: require('../../Assets/Products/om-9.png'), thumbnail: require('../../Assets/Products/om-9-small.png')},
      {original: require('../../Assets/Products/om-10.png'), thumbnail: require('../../Assets/Products/om-10-small.png')},
      {original: require('../../Assets/Products/om-11.png'), thumbnail: require('../../Assets/Products/om-11-small.png')},
    ],
    title: "Olympus OM-1 35mm SLR w/ Zuiko 28mm 3.5 & Original Hood",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 199
  },

  { image: require('../../Assets/Products/nikor105-2.png'),
    images: [
      {original: require('../../Assets/Products/nikor105-2.png'), thumbnail: require('../../Assets/Products/nikor105-2-small.png')},
      {original: require('../../Assets/Products/nikor105-1.png'), thumbnail: require('../../Assets/Products/nikor105-1-small.png')},
      {original: require('../../Assets/Products/nikor105-3.png'), thumbnail: require('../../Assets/Products/nikor105-3-small.png')},
      {original: require('../../Assets/Products/nikor105-4.png'), thumbnail: require('../../Assets/Products/nikor105-4-small.png')},
      {original: require('../../Assets/Products/nikor105-5.png'), thumbnail: require('../../Assets/Products/nikor105-5-small.png')},
      {original: require('../../Assets/Products/nikor105-6.png'), thumbnail: require('../../Assets/Products/nikor105-6-small.png')},
      {original: require('../../Assets/Products/nikor105-7.png'), thumbnail: require('../../Assets/Products/nikor105-7-small.png')},
      {original: require('../../Assets/Products/nikor105-8.png'), thumbnail: require('../../Assets/Products/nikor105-8-small.png')},
      {original: require('../../Assets/Products/nikor105-9.png'), thumbnail: require('../../Assets/Products/nikor105-9-small.png')},
      {original: require('../../Assets/Products/nikor105-10.png'), thumbnail: require('../../Assets/Products/nikor105-10-small.png')},
      {original: require('../../Assets/Products/nikor105-11.png'), thumbnail: require('../../Assets/Products/nikor105-11-small.png')},
    ],
    title: "Nikkor 105mm f2.5 AI-S w/ Original Caps",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Lenses",
    price: 229
  },

  { image: require('../../Assets/Products/nikonf-1.png'),
    images: [
      {original: require('../../Assets/Products/nikonf-1.png'), thumbnail: require('../../Assets/Products/nikonf-1-small.png')},
      {original: require('../../Assets/Products/nikonf-2.png'), thumbnail: require('../../Assets/Products/nikonf-2-small.png')},
      {original: require('../../Assets/Products/nikonf-3.png'), thumbnail: require('../../Assets/Products/nikonf-3-small.png')},
      {original: require('../../Assets/Products/nikonf-4.png'), thumbnail: require('../../Assets/Products/nikonf-4-small.png')},
      {original: require('../../Assets/Products/nikonf-5.png'), thumbnail: require('../../Assets/Products/nikonf-5-small.png')},
      {original: require('../../Assets/Products/nikonf-6.png'), thumbnail: require('../../Assets/Products/nikonf-6-small.png')},
      {original: require('../../Assets/Products/nikonf-7.png'), thumbnail: require('../../Assets/Products/nikonf-7-small.png')},
      {original: require('../../Assets/Products/nikonf-8.png'), thumbnail: require('../../Assets/Products/nikonf-8-small.png')},
      {original: require('../../Assets/Products/nikonf-9.png'), thumbnail: require('../../Assets/Products/nikonf-9-small.png')},
      {original: require('../../Assets/Products/nikonf-10.png'), thumbnail: require('../../Assets/Products/nikonf-10-small.png')}
    ],
    title: "Nikon F w/ 45mm 2.8 Pancake Lens & UV Filter",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 279
  },

]

const uniqueItems = (x, i, array) => array.indexOf(x) === i
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
)

PRODUCT_CATEGORIES.push("All")
PRODUCT_CATEGORIES.sort()

export default Products

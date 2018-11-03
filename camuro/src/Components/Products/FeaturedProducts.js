import React, { Component } from 'react'
import FeaturedProduct from './FeaturedProduct'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import _ from 'lodash'
import ProductModal from './ProductModal'
import Carousel from './Carousel'
import styled from 'styled-components'

class FeaturedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS
    }
  }

  render() {
    const ProductItems = ({ state: { products, displayCategory } }) => (
      <div className="featured-products">
        {products
          .map(({ product, category, title, description, price, index, image, images, sold, optics, mechanics }) => (
            <FeaturedProduct key={index} toggleModal={this.toggleModal} optics={optics} mechanics={mechanics} isOpen={this.state.isOpen} product={product} images={images} image={image} index={index} sold={sold} category={category} title={title} description={description} price={price} addProduct={this.props.addProduct} />
          ))}
      </div>
    )
    const UI = ({
      state,
      state: { productCategories, products },
      setCategory,
      AllProducts,
    }) => (
      <div>
        <img src={require('../../Assets/shop-3.svg')} alt="Shop Now!" />
        <ProductItems state={state} />
        <Link to='/products' alt="Products">
          <button className="gallery-btn featured-btn">See More</button>
        </Link>
      </div>
    )
    return <UI setCategory={this.setCategory} state={this.state} />
  }
}

// data
const PRODUCTS = [

  { image: require('../../Assets/Products/konicaHex-1.png'),
    images: [
      {original: require('../../Assets/Products/konicaHex-1.png'), thumbnail: require('../../Assets/Products/konicaHex-1-small.png')},
      {original: require('../../Assets/Products/konicaHex-2.png'), thumbnail: require('../../Assets/Products/konicaHex-2-small.png')},
      {original: require('../../Assets/Products/konicaHex-3.png'), thumbnail: require('../../Assets/Products/konicaHex-3-small.png')},
      {original: require('../../Assets/Products/konicaHex-4.png'), thumbnail: require('../../Assets/Products/konicaHex-4-small.png')},
      {original: require('../../Assets/Products/konicaHex-5.png'), thumbnail: require('../../Assets/Products/konicaHex-5-small.png')},
      {original: require('../../Assets/Products/konicaHex-6.png'), thumbnail: require('../../Assets/Products/konicaHex-6-small.png')},
      {original: require('../../Assets/Products/konicaHex-7.png'), thumbnail: require('../../Assets/Products/konicaHex-7-small.png')},
      {original: require('../../Assets/Products/konicaHex-8.png'), thumbnail: require('../../Assets/Products/konicaHex-8-small.png')},
      {original: require('../../Assets/Products/konicaHex-9.png'), thumbnail: require('../../Assets/Products/konicaHex-9-small.png')},
      {original: require('../../Assets/Products/konicaHex-10.png'), thumbnail: require('../../Assets/Products/konicaHex-10-small.png')},
      {original: require('../../Assets/Products/konicaHex-11.png'), thumbnail: require('../../Assets/Products/konicaHex-11-small.png')},
      {original: require('../../Assets/Products/konicaHex-12.png'), thumbnail: require('../../Assets/Products/konicaHex-12-small.png')},
      {original: require('../../Assets/Products/konicaHex-13.png'), thumbnail: require('../../Assets/Products/konicaHex-13-small.png')},
      {original: require('../../Assets/Products/konicaHex-14.png'), thumbnail: require('../../Assets/Products/konicaHex-14-small.png')},
      {original: require('../../Assets/Products/konicaHex-15.png'), thumbnail: require('../../Assets/Products/konicaHex-15-small.png')},
    ],
    title: "Konica Hexar RF w 50mm M-Hexanon",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 1499,
    sold: false
  },

  { image: require('../../Assets/Products/mamiya330-1.png'),
    images: [
      {original: require('../../Assets/Products/mamiya330-1.png'), thumbnail: require('../../Assets/Products/mamiya330-1-small.png')},
      {original: require('../../Assets/Products/mamiya330-2.png'), thumbnail: require('../../Assets/Products/mamiya330-2-small.png')},
      {original: require('../../Assets/Products/mamiya330-3.png'), thumbnail: require('../../Assets/Products/mamiya330-3-small.png')},
      {original: require('../../Assets/Products/mamiya330-4.png'), thumbnail: require('../../Assets/Products/mamiya330-4-small.png')},
      {original: require('../../Assets/Products/mamiya330-5.png'), thumbnail: require('../../Assets/Products/mamiya330-5-small.png')},
      {original: require('../../Assets/Products/mamiya330-6.png'), thumbnail: require('../../Assets/Products/mamiya330-6-small.png')},
      {original: require('../../Assets/Products/mamiya330-7.png'), thumbnail: require('../../Assets/Products/mamiya330-7-small.png')},
      {original: require('../../Assets/Products/mamiya330-8.png'), thumbnail: require('../../Assets/Products/mamiya330-8-small.png')},
      {original: require('../../Assets/Products/mamiya330-9.png'), thumbnail: require('../../Assets/Products/mamiya330-9-small.png')},
      {original: require('../../Assets/Products/mamiya330-10.png'), thumbnail: require('../../Assets/Products/mamiya330-10-small.png')},
      {original: require('../../Assets/Products/mamiya330-11.png'), thumbnail: require('../../Assets/Products/mamiya330-11-small.png')},
      {original: require('../../Assets/Products/mamiya330-12.png'), thumbnail: require('../../Assets/Products/mamiya330-12-small.png')},
      {original: require('../../Assets/Products/mamiya330-13.png'), thumbnail: require('../../Assets/Products/mamiya330-13-small.png')},
      {original: require('../../Assets/Products/mamiya330-14.png'), thumbnail: require('../../Assets/Products/mamiya330-14-small.png')},
    ],
    title: "Mamiya C330 Pro S Blue Dot 80mm 2.8",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 999,
    sold: false
  },

  { image: require('../../Assets/Products/nikkor35-10.png'),
    images: [
      {original: require('../../Assets/Products/nikkor35-10.png'), thumbnail: require('../../Assets/Products/nikkor35-10-small.png')},
      {original: require('../../Assets/Products/nikkor35-2.png'), thumbnail: require('../../Assets/Products/nikkor35-2-small.png')},
      {original: require('../../Assets/Products/nikkor35-3.png'), thumbnail: require('../../Assets/Products/nikkor35-3-small.png')},
      {original: require('../../Assets/Products/nikkor35-4.png'), thumbnail: require('../../Assets/Products/nikkor35-4-small.png')},
      {original: require('../../Assets/Products/nikkor35-5.png'), thumbnail: require('../../Assets/Products/nikkor35-5-small.png')},
      {original: require('../../Assets/Products/nikkor35-6.png'), thumbnail: require('../../Assets/Products/nikkor35-6-small.png')},
      {original: require('../../Assets/Products/nikkor35-7.png'), thumbnail: require('../../Assets/Products/nikkor35-7-small.png')},
      {original: require('../../Assets/Products/nikkor35-8.png'), thumbnail: require('../../Assets/Products/nikkor35-8-small.png')},
      {original: require('../../Assets/Products/nikkor35-9.png'), thumbnail: require('../../Assets/Products/nikkor35-9-small.png')},
      {original: require('../../Assets/Products/nikkor35-1.png'), thumbnail: require('../../Assets/Products/nikkor35-1-small.png')}
    ],
    title: "Nikkor 35mm f1.4 Ai",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 399,
    sold: false
  },

  { image: require('../../Assets/Products/leicaM3-1.png'),
    images: [
      {original: require('../../Assets/Products/leicaM3-1.png'), thumbnail: require('../../Assets/Products/leicaM3-1-small.png')},
      {original: require('../../Assets/Products/leicaM3-2.png'), thumbnail: require('../../Assets/Products/leicaM3-2-small.png')},
      {original: require('../../Assets/Products/leicaM3-3.png'), thumbnail: require('../../Assets/Products/leicaM3-3-small.png')},
      {original: require('../../Assets/Products/leicaM3-4.png'), thumbnail: require('../../Assets/Products/leicaM3-4-small.png')},
      {original: require('../../Assets/Products/leicaM3-5.png'), thumbnail: require('../../Assets/Products/leicaM3-5-small.png')},
      {original: require('../../Assets/Products/leicaM3-6.png'), thumbnail: require('../../Assets/Products/leicaM3-6-small.png')},
      {original: require('../../Assets/Products/leicaM3-7.png'), thumbnail: require('../../Assets/Products/leicaM3-7-small.png')},
      {original: require('../../Assets/Products/leicaM3-8.png'), thumbnail: require('../../Assets/Products/leicaM3-8-small.png')},
      {original: require('../../Assets/Products/leicaM3-9.png'), thumbnail: require('../../Assets/Products/leicaM3-9-small.png')},
      {original: require('../../Assets/Products/leicaM3-10.png'), thumbnail: require('../../Assets/Products/leicaM3-10-small.png')}
    ],
    title: "Leica M3 DS",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 949,
    sold: false
  },

  { image: require('../../Assets/Products/leicaSummi50-13.png'),
    images: [
      {original: require('../../Assets/Products/leicaSummi50-13.png'), thumbnail: require('../../Assets/Products/leicaSummi50-3-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-4.png'), thumbnail: require('../../Assets/Products/leicaSummi50-4-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-5.png'), thumbnail: require('../../Assets/Products/leicaSummi50-5-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-6.png'), thumbnail: require('../../Assets/Products/leicaSummi50-6-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-7.png'), thumbnail: require('../../Assets/Products/leicaSummi50-7-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-8.png'), thumbnail: require('../../Assets/Products/leicaSummi50-8-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-9.png'), thumbnail: require('../../Assets/Products/leicaSummi50-9-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-10.png'), thumbnail: require('../../Assets/Products/leicaSummi50-10-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-11.png'), thumbnail: require('../../Assets/Products/leicaSummi50-11-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-12.png'), thumbnail: require('../../Assets/Products/leicaSummi50-12-small.png')},
      {original: require('../../Assets/Products/leicaSummi50-3.png'), thumbnail: require('../../Assets/Products/leicaSummi50-3-small.png')},
    ],
    title: "Leica Summicron 50mm f2 Type V-NIB",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 1749,
    sold: false
  },

  { image: require('../../Assets/Products/contaxT2-1.png'),
    images: [
      {original: require('../../Assets/Products/contaxT2-1.png'), thumbnail: require('../../Assets/Products/contaxT2-1-small.png')},
      {original: require('../../Assets/Products/contaxT2-2.png'), thumbnail: require('../../Assets/Products/contaxT2-2-small.png')},
      {original: require('../../Assets/Products/contaxT2-3.png'), thumbnail: require('../../Assets/Products/contaxT2-3-small.png')},
      {original: require('../../Assets/Products/contaxT2-4.png'), thumbnail: require('../../Assets/Products/contaxT2-4-small.png')},
      {original: require('../../Assets/Products/contaxT2-5.png'), thumbnail: require('../../Assets/Products/contaxT2-5-small.png')},
      {original: require('../../Assets/Products/contaxT2-6.png'), thumbnail: require('../../Assets/Products/contaxT2-6-small.png')},
      {original: require('../../Assets/Products/contaxT2-7.png'), thumbnail: require('../../Assets/Products/contaxT2-7-small.png')},
      {original: require('../../Assets/Products/contaxT2-8.png'), thumbnail: require('../../Assets/Products/contaxT2-8-small.png')},
    ],
    title: "Contax T2",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 799,
    sold: false
  },

]

const uniqueItems = (x, i, array) => array.indexOf(x) === i
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
)

PRODUCT_CATEGORIES.push("All")
PRODUCT_CATEGORIES.sort()

export default FeaturedProducts

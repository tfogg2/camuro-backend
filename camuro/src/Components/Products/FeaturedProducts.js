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

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-1.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-1.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-2.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-3.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-4.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-5.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-6.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-7.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-8.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-9.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-10.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-11.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-12.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-12.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-13.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-13.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-14.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-14.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-15.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-15.png'},
    ],
    title: "Konica Hexar RF w 50mm M-Hexanon",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever. \n This 50mm f2 Hexar focus scale and nameplate has been professionally refinished in a white and matte black  “Stealth Edition” to match the Camera paint and it looks flawless. Great for when you don’t want to be too flashy but still want those shots. A unique pairing, ready for the streets.",
    mechanics: "Focus: Smooth throughout  \n Diaphragm: Clean & dry-no oil  \n Shutter: Speeds accurate throughout the range B-1/4000  \n Film Transport: Clean and strong. 36+ frames possible. Film advance in strong and smooth throughout.  \n Light Seals: New  \n Meter: Functional and accurate  \n Viewfinder: Big, clean and bright.  \n Rangefinder: Contrasty and easy to nail focus. Better than any Leica VF this side of an M3. A joy to use",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically its as good as it gets",
    category: "Rangefinders",
    price: 1499,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-1.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-1.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-2.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-3.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-4.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-5.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-6.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-7.png'},
    ],
    title: "Leica iiif Red Dial",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. 40 frames possible. Film advance in strong and smooth throughout. \n Light Seals: Light tight  \n Meter: No meter! \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to nail focus",
    optics:"",
    category: "Rangefinders",
    price: 329,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-1.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-1.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-2.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-3.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-4.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-5.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-6.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-7.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-8.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-9.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-10.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-11.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-12.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-12.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-13.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-13.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-14.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-14.png'}
    ],
    title: "Canon F1, 28mm w NiCd Pack",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout \n Diaphragm: Clean & dry with snappy action-no oil \n Shutter: Speeds accurate throughout the range \n Film Transport: Clean and accurate. 36 frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate \n Viewfinder: Big, clean and bright-minor micro dust-no affect \n",
    optics:"Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Minimal internal micro dust seen under intense light-no impact on image quality.",
    category: "SLRs",
    price: 449,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-1.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-1.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-2.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-3.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-4.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-5.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-6.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-7.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-8.png'}
    ],
    title: 'Leica iiib Rangefinder',
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Signs of use in the form of some “bright marks”. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever. \n This particular iiib comes with an “of era” modification for flash sync! A unique and rare edition to an already hard to find rangefinder.",
    mechanics:"Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. 40 frames possible. Film advance in strong and smooth throughout. \n Light Seals: Light tight  \n Meter: No meter! \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to nail focus",
    optics:"",
    category: "Rangefinders",
    price: 339,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-1.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-1.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-2.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-3.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-4.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-5.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-6.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-7.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-8.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-9.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-10.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-11.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-12.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-12.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-13.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-13.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-14.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-14.png'},
    ],
    title: "Mamiya C330 Pro S Blue Dot 80mm 2.8",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Bellows. Smooth throughout  \n Diaphragm: Clean & dry-no oil  \n Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: No meter! \n Viewfinder: Big, clean and bright. Easy to nail focus",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically its as good as it gets",
    category: "TLRs",
    price: 999,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-1.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-1.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-2.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-3.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-4.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-5.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-6.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-7.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-8.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-9.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-10.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-11.png'}
    ],
    title: "Minolta 7sii Rangefinder",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout  \n Diaphragm: Clean & dry-no oil  \n Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. 36+ frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate  \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to nail focus",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically its as good as it gets",
    category: "Rangefinders",
    price: 309,
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

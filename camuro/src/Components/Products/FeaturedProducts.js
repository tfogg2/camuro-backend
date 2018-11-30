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

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonetQ17-11-small.png'}
    ],
    title: "Canonet QL17 GIII",
    description: "Cosmetically in excellent condition. Fully restored and cleaned by out technician. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout \n Diaphragm: Clean & dry-no oil \n Shutter: Speeds accurate throughout the range \n Film Transport: Clean and strong. 36+ frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to focus",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Optically its as good as it gets",
    category: "Rangefinders",
    price: 199,
    sold: false
  },

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

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM2-10-small.png'}
    ],
    title: "Leica M2",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Minor “bright marks” on chrome from normal use. No dings, dents, etc. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever. \n Just cleaned and lubed by Leica master tech Youxin Ye \n Orignal M6 chassis",
    mechanics: "Shutter: Speeds accurate throughout the range \n Film Transport: Clean and accurate. 40 frames possible. Film advance in strong and smooth throughout. \n Light Seals: Light tight  \n Meter: No meter! \n Viewfinder: Big, clean and bright-the best, but you already know \n Rangefinder: Contrasty and easy to nail focus \n",
    optics:"",
    category: "Rangefinders",
    price: 1299,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-11-small.png'}
    ],
    title: "Leica M3",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Minor “bright marks” on chrome from normal use. No dings, dents, etc. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever. \n Just cleaned and lubed by Leica master tech Youxin Ye \n Original Vulcanite",
    mechanics: "Shutter: Speeds accurate throughout the range \n Film Transport: Clean and accurate. 40 frames possible. Film advance in strong and smooth throughout. \n Light Seals: Light tight  \n Meter: No meter! \n Viewfinder: Big, clean and bright-the best, but you already know \n Rangefinder: Contrasty and easy to nail focus \n",
    optics:"",
    category: "Rangefinders",
    price: 1199,
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

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/om35-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-11-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-12.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-12-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-13.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-13-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-14.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-14-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om35-15.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om35-15-small.png'},
    ],
    title: "Olympus 35SP Black Paint",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout \n Diaphragm: Clean & dry-no oil \n Shutter: Speeds accurate throughout the range \n Film Transport: Clean and strong. 36+ frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to focus",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically its as good as it gets",
    category: "Rangefinders",
    price: 419,
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

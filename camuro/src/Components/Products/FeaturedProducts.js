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
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever. \n This 50mm f2 Hexar focus scale and nameplate has been professionally refinished in a white and matte black  “Stealth Edition” to match the Camera paint and it looks flawless. Great for when you don’t want to be too flashy but still want those shots. A unique pairing, ready for the streets.",
    mechanics: "Focus: Smooth throughout  \n Diaphragm: Clean & dry-no oil  \n Shutter: Speeds accurate throughout the range B-1/4000  \n Film Transport: Clean and strong. 36+ frames possible. Film advance in strong and smooth throughout.  \n Light Seals: New  \n Meter: Functional and accurate  \n Viewfinder: Big, clean and bright.  \n Rangefinder: Contrasty and easy to nail focus. Better than any Leica VF this side of an M3. A joy to use",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically its as good as it gets",
    category: "Rangefinders",
    price: 1499,
    sold: false
  },

  { image: require('../../Assets/Products/leicaRed-1.png'),
    images: [
      {original: require('../../Assets/Products/leicaRed-1.png'), thumbnail: require('../../Assets/Products/leicaRed-1-small.png')},
      {original: require('../../Assets/Products/leicaRed-2.png'), thumbnail: require('../../Assets/Products/leicaRed-2-small.png')},
      {original: require('../../Assets/Products/leicaRed-3.png'), thumbnail: require('../../Assets/Products/leicaRed-3-small.png')},
      {original: require('../../Assets/Products/leicaRed-4.png'), thumbnail: require('../../Assets/Products/leicaRed-4-small.png')},
      {original: require('../../Assets/Products/leicaRed-5.png'), thumbnail: require('../../Assets/Products/leicaRed-5-small.png')},
      {original: require('../../Assets/Products/leicaRed-6.png'), thumbnail: require('../../Assets/Products/leicaRed-6-small.png')},
      {original: require('../../Assets/Products/leicaRed-7.png'), thumbnail: require('../../Assets/Products/leicaRed-7-small.png')},
    ],
    title: "Leica iiif Red Dial",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. 40 frames possible. Film advance in strong and smooth throughout. \n Light Seals: Light tight  \n Meter: No meter! \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to nail focus",
    optics:"",
    category: "Rangefinders",
    price: 329,
    sold: false
  },

  { image: require('../../Assets/Products/canonF1-1.png'),
    images: [
      {original: require('../../Assets/Products/canonF1-1.png'), thumbnail: require('../../Assets/Products/canonF1-1-small.png')},
      {original: require('../../Assets/Products/canonF1-2.png'), thumbnail: require('../../Assets/Products/canonF1-2-small.png')},
      {original: require('../../Assets/Products/canonF1-3.png'), thumbnail: require('../../Assets/Products/canonF1-3-small.png')},
      {original: require('../../Assets/Products/canonF1-4.png'), thumbnail: require('../../Assets/Products/canonF1-4-small.png')},
      {original: require('../../Assets/Products/canonF1-5.png'), thumbnail: require('../../Assets/Products/canonF1-5-small.png')},
      {original: require('../../Assets/Products/canonF1-6.png'), thumbnail: require('../../Assets/Products/canonF1-6-small.png')},
      {original: require('../../Assets/Products/canonF1-7.png'), thumbnail: require('../../Assets/Products/canonF1-7-small.png')},
      {original: require('../../Assets/Products/canonF1-8.png'), thumbnail: require('../../Assets/Products/canonF1-8-small.png')},
      {original: require('../../Assets/Products/canonF1-9.png'), thumbnail: require('../../Assets/Products/canonF1-9-small.png')},
      {original: require('../../Assets/Products/canonF1-10.png'), thumbnail: require('../../Assets/Products/canonF1-10-small.png')},
      {original: require('../../Assets/Products/canonF1-11.png'), thumbnail: require('../../Assets/Products/canonF1-11-small.png')},
      {original: require('../../Assets/Products/canonF1-12.png'), thumbnail: require('../../Assets/Products/canonF1-12-small.png')},
      {original: require('../../Assets/Products/canonF1-13.png'), thumbnail: require('../../Assets/Products/canonF1-13-small.png')},
      {original: require('../../Assets/Products/canonF1-14.png'), thumbnail: require('../../Assets/Products/canonF1-14-small.png')}
    ],
    title: "Canon F1, 28mm w NiCd Pack",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout \n Diaphragm: Clean & dry with snappy action-no oil \n Shutter: Speeds accurate throughout the range \n Film Transport: Clean and accurate. 36 frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate \n Viewfinder: Big, clean and bright-minor micro dust-no affect \n",
    optics:"Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Minimal internal micro dust seen under intense light-no impact on image quality.",
    category: "SLRs",
    price: 449,
    sold: false
  },

  { image: require('../../Assets/Products/leicaiiib-1.png'),
    images: [
      {original: require('../../Assets/Products/leicaiiib-1.png'), thumbnail: require('../../Assets/Products/leicaiiib-1-small.png')},
      {original: require('../../Assets/Products/leicaiiib-2.png'), thumbnail: require('../../Assets/Products/leicaiiib-2-small.png')},
      {original: require('../../Assets/Products/leicaiiib-3.png'), thumbnail: require('../../Assets/Products/leicaiiib-3-small.png')},
      {original: require('../../Assets/Products/leicaiiib-4.png'), thumbnail: require('../../Assets/Products/leicaiiib-4-small.png')},
      {original: require('../../Assets/Products/leicaiiib-5.png'), thumbnail: require('../../Assets/Products/leicaiiib-5-small.png')},
      {original: require('../../Assets/Products/leicaiiib-6.png'), thumbnail: require('../../Assets/Products/leicaiiib-6-small.png')},
      {original: require('../../Assets/Products/leicaiiib-7.png'), thumbnail: require('../../Assets/Products/leicaiiib-7-small.png')},
      {original: require('../../Assets/Products/leicaiiib-8.png'), thumbnail: require('../../Assets/Products/leicaiiib-8-small.png')}
    ],
    title: 'Leica iiib Rangefinder',
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Signs of use in the form of some “bright marks”. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever. \n This particular iiib comes with an “of era” modification for flash sync! A unique and rare edition to an already hard to find rangefinder.",
    mechanics:"Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. 40 frames possible. Film advance in strong and smooth throughout. \n Light Seals: Light tight  \n Meter: No meter! \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to nail focus",
    optics:"",
    category: "Rangefinders",
    price: 339,
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
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Bellows. Smooth throughout  \n Diaphragm: Clean & dry-no oil  \n Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: No meter! \n Viewfinder: Big, clean and bright. Easy to nail focus",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically its as good as it gets",
    category: "TLRs",
    price: 999,
    sold: false
  },

  { image: require('../../Assets/Products/minolta7-1.png'),
    images: [
      {original: require('../../Assets/Products/minolta7-1.png'), thumbnail: require('../../Assets/Products/minolta7-1-small.png')},
      {original: require('../../Assets/Products/minolta7-2.png'), thumbnail: require('../../Assets/Products/minolta7-2-small.png')},
      {original: require('../../Assets/Products/minolta7-3.png'), thumbnail: require('../../Assets/Products/minolta7-3-small.png')},
      {original: require('../../Assets/Products/minolta7-4.png'), thumbnail: require('../../Assets/Products/minolta7-4-small.png')},
      {original: require('../../Assets/Products/minolta7-5.png'), thumbnail: require('../../Assets/Products/minolta7-5-small.png')},
      {original: require('../../Assets/Products/minolta7-6.png'), thumbnail: require('../../Assets/Products/minolta7-6-small.png')},
      {original: require('../../Assets/Products/minolta7-7.png'), thumbnail: require('../../Assets/Products/minolta7-7-small.png')},
      {original: require('../../Assets/Products/minolta7-8.png'), thumbnail: require('../../Assets/Products/minolta7-8-small.png')},
      {original: require('../../Assets/Products/minolta7-9.png'), thumbnail: require('../../Assets/Products/minolta7-9-small.png')},
      {original: require('../../Assets/Products/minolta7-10.png'), thumbnail: require('../../Assets/Products/minolta7-10-small.png')},
      {original: require('../../Assets/Products/minolta7-11.png'), thumbnail: require('../../Assets/Products/minolta7-11-small.png')}
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

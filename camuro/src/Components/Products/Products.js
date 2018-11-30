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
          .map(({ product, category, title, description, price, index, image, images, sold, mechanics, optics }) => (
            <div className="product-box">
              <div>
                <Product key={`ProductItems-${title}`} toggleModal={this.toggleModal} isOpen={this.state.isOpen} mechanics={mechanics} optics={optics} product={product} images={images} image={image} index={index} sold={sold} category={category} title={title} description={description} price={price} addProduct={this.props.addProduct} />
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
            <img src={require('../../Assets/shop-3.svg')} alt="Shop Now!" />
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

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor28-11-small.png'}
    ],
    title: "Nikkor 28mm 2.8 Ai-S",
    description: "Cosmetically in near mint condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever. \n Comes with original rear cap, a metal Minolta front cap and a UV filter",
    mechanics: "Focus is smooth and clean \n Aperture clicks with distinct stops \n Blades are clean, dry and snappy",
    optics:"Excellent \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically it performs flawlessly. Sharp at all apertures",
    category: "Lenses",
    price: 189,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusXaWa-11-small.png'}
    ],
    title: "Olympus XA w A11 Flash & Case",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout \n Diaphragm: Clean & dry with snappy action-no oil \n Shutter: Speeds accurate throughout the range \n Film Transport: Clean and accurate. 36 frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate \n Viewfinder: Big, clean and bright-minor micro dust-no affect \n",
    optics:"Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Minimal internal micro dust seen under intense light-no impact on image quality.",
    category: "Rangefinders",
    price: 169,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/om28-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om28-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om28-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om28-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om28-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om28-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om28-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om28-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om28-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om28-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om28-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om28-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om28-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/om28-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/om28-7-small.png'}
    ],
    title: "Olympus 28mm 3.5 w Case & Caps",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout \n Diaphragm: Clean & dry with snappy action-no oil \n Shutter: Speeds accurate throughout the range \n Film Transport: Clean and accurate. 36 frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate \n Viewfinder: Big, clean and bright-minor micro dust-no affect \n",
    optics:"Excellent \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically it performs flawlessly. Sharp at all apertures",
    category: "Lenses",
    price: 69,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-11-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-12.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-12-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-13.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-13-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-14.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonF1-14-small.png'}
    ],
    title: "Canon F1, 28mm w NiCd Pack",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout \n Diaphragm: Clean & dry with snappy action-no oil \n Shutter: Speeds accurate throughout the range \n Film Transport: Clean and accurate. 36 frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate \n Viewfinder: Big, clean and bright-minor micro dust-no affect \n",
    optics:"Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Minimal internal micro dust seen under intense light-no impact on image quality.",
    category: "SLRs",
    price: 449,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/canonFd50-11-small.png'},
    ],
    title: "Canon nF1 w nFD 50mm 1.8",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout \n Diaphragm: Clean & dry with snappy action-no oil \n Shutter: Speeds accurate throughout the range \n Film Transport: Clean and accurate. 36 frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate \n Viewfinder: Big, clean and bright-minor micro dust-no affect \n",
    optics:"Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Minimal internal micro dust seen under intense light-no impact on image quality.",
    category: "SLRs",
    price: 359,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-11-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-12.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-12-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-13.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-13-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-14.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-14-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-15.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/konicaHex-15-small.png'},
    ],
    title: "Konica Hexar RF w 50mm M-Hexanon",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever. \n This 50mm f2 Hexar focus scale and nameplate has been professionally refinished in a white and matte black  “Stealth Edition” to match the Camera paint and it looks flawless. Great for when you don’t want to be too flashy but still want those shots. A unique pairing, ready for the streets.",
    mechanics: "Focus: Smooth throughout  \n Diaphragm: Clean & dry-no oil  \n Shutter: Speeds accurate throughout the range B-1/4000  \n Film Transport: Clean and strong. 36+ frames possible. Film advance in strong and smooth throughout.  \n Light Seals: New  \n Meter: Functional and accurate  \n Viewfinder: Big, clean and bright.  \n Rangefinder: Contrasty and easy to nail focus. Better than any Leica VF this side of an M3. A joy to use",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically its as good as it gets",
    category: "Rangefinders",
    price: 1499,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaRed-7-small.png'},
    ],
    title: "Leica iiif Red Dial",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. 40 frames possible. Film advance in strong and smooth throughout. \n Light Seals: Light tight  \n Meter: No meter! \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to nail focus",
    optics:"",
    category: "Rangefinders",
    price: 229,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaiiib-8-small.png'}
    ],
    title: 'Leica iiib Rangefinder',
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Signs of use in the form of some “bright marks”. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever. \n This particular iiib comes with an “of era” modification for flash sync! A unique and rare edition to an already hard to find rangefinder.",
    mechanics:"Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. 40 frames possible. Film advance in strong and smooth throughout. \n Light Seals: Light tight  \n Meter: No meter! \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to nail focus",
    optics:"",
    category: "Rangefinders",
    price: 339,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-11-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-12.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-12-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-13.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-13-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-14.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/mamiya330-14-small.png'},
    ],
    title: "Mamiya C330 Pro S Blue Dot 80mm 2.8",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Bellows. Smooth throughout  \n Diaphragm: Clean & dry-no oil  \n Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: No meter! \n Viewfinder: Big, clean and bright. Easy to nail focus",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically its as good as it gets",
    category: "TLRs",
    price: 999,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-10-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-11.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minolta7-11-small.png'}
    ],
    title: "Minolta 7sii Rangefinder",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "Focus: Smooth throughout  \n Diaphragm: Clean & dry-no oil  \n Shutter: Speeds accurate throughout the range  \n Film Transport: Clean and strong. 36+ frames possible. Film advance in strong and smooth throughout. \n Light Seals: New \n Meter: Functional and accurate  \n Viewfinder: Big, clean and bright. \n Rangefinder: Contrasty and easy to nail focus",
    optics:"Mint \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically its as good as it gets",
    category: "Rangefinders",
    price: 309,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/minoltaMd-9-small.png'}
    ],
    title: "Minolta MD Rokkor-X 35mm f1.8",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "",
    optics:"Excellent \n Clean, clear and bright \n One minor, 1mm coating scratch on front element as pictured \n Besides that, no fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically it performs flawlessly. No image impact from the coating mark.",
    category: "Lenses",
    price: 229,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/nikkorH-8-small.png'}
    ],
    title: "Nikkor-H 28mm f3.5 non-Ai w HS-10 Hood",
    description: "Cosmetically in beautiful condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever.",
    mechanics: "",
    optics:"Excellent \n Clean, clear and bright \n No fungus, haze, scratches, separation or pitting  \n Coatings are clean and bright on front & rear \n Optically it performs flawlessly. No image impact from the coating mark.",
    category: "Lenses",
    price: 99,
    sold: false
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/canonA1-1-featured.png',
    images: [],
    title: "Canon A-1 w nFD 50mm f1.8",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 179,
    sold: true
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
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/leicaM3-10-small.png'}
    ],
    title: "Leica M3 DS",
    description: "",
    mechanics: "",
    optics:"",
    category: "Rangefinders",
    price: 949,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/nikkor35-10-featured.png',
    images: [],
    title: "Nikkor 35mm f1.4 Ai",
    description: "",
    mechanics: "",
    optics:"",
    category: "Lenses",
    price: 399,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/contaxT2-1-featured.png',
    images: [],
    title: "Contax T2",
    description: "",
    mechanics: "",
    optics:"",
    category: "Rangefinders",
    price: 799,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/fujiGW-1-featured.png',
    images: [],
    title: "Fuji GW670III 6x7 Rangefinder",
    description: "",
    mechanics: "",
    optics:"",
    category: "Rangefinders",
    price: 989,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-1-featured.png',
    images: [
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-1.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-1-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-2.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-2-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-3.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-3-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-4.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-4-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-5.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-5-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-6.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-6-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-7.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-7-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-8.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-8-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-9.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-9-small.png'},
      {original: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-10.png', thumbnail: 'https://s3.us-east-2.amazonaws.com/camuro/olympusOm1-10-small.png'}
    ],
    title: "Olympus OM-1 w Zuiko 50mm 1.4",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 229,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/canonet-1-featured.png',
      images: [],
    title: "Canon Canonet Giii QL 17 w/ Canonlite D, Filter & Cap-Boxes",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 299,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/canonfd2-1-featured.png',
      images: [],
    title: "Canon FD 50mm f1.2 with UV Filter, Caps & Case",
    description: "",
    mechanics:"",
    optics:"",
    category: "Lenses",
    price: 299,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/contax167-1-featured.png',
      images: [],
    title: "Contax 167mt SLR w/ Zeiss MMJ 45mm f2.8 Lens, Filter, Strap & Cap Combo",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 329,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/contaxii-1-featured.png',
    images: [],
    title: "Contax iia 'Color Dial' Rangefinder w/ Zeiss-Opton Sonnar 5cm f1.5 Post War T Coated Lens",
    description: "",
    mechanics:"",
    optics:"",
    category: "Rangefinders",
    price: 419,
    sold: true
  },
  { image: 'https://s3.us-east-2.amazonaws.com/camuro/pentaxP3-1-featured.png',
    images: [],
    title: "Pentax P3",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 89,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/leicaSummi40-1-featured.png',
    images: [],
    title: "Leica Summicron 40mm f2",
    description: "",
    mechanics: "",
    optics:"",
    category: "Lenses",
    price: 619,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/leicasummicron-1-featured.png',
    images: [],
    title: "Leica Summaron 35 3.5 M Mount w/ Goggles & Hood",
    description: "",
    mechanics:"",
    optics:"",
    category: "Lenses",
    price: 519,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/leicaSummi50-13-featured.png',
      images: [],
    title: "Leica Summicron 50mm f2 Type V-NIB",
    description: "",
    mechanics: "",
    optics:"",
    category: "Lenses",
    price: 1749,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/minoltam-1-featured.png',
    images: [],
    title: "Minolta M-Rokkor 40mm f2 with Minolta Cap, UV Filter & Case",
    description: "",
    mechanics:"",
    optics:"",
    category: "Lenses",
    price: 499,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/nikonf1-3-featured.png',
      images: [],
    title: "Nikon F w/ 45mm 2.8 Pancake Lens & UV Filter",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 279,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/nikonfpho-1-featured.png',
      images: [],
    title: "Nikon F Photomic w/ 50mm f1.4 & Original Half Case",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 329,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/nikonf2-1-featured.png',
      images: [],
    title: "Nikon F2 w/ D-11 & Waist-Lever Finders",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 279,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/mamya7-9-featured.png',
      images: [],
    title: "Mamiya 7ii 6x7 Medium Format Rangefinder w/ 65mm f4 Lens, Original Caps & Hood",
    description: "",
    mechanics:"",
    optics:"",
    category: "Rangefinders",
    price: 3719,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/olympusEpic-1-featured.png',
      images: [],
    title: "Olympus Stylus Epic 35mm 2.8 P&S",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 239,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/o95-4-featured.png',
      images: [],
    title: "Canon 7 Rangefinder w/ Canon 50mm f0.95 “Dream Lens” w/ Original Filter & Caps",
    description: "",
    mechanics:"",
    optics:"",
    category: "Rangefinders",
    price: 2850,
    sold: true
  },

  { image: 'https://s3.us-east-2.amazonaws.com/camuro/voig-1-featured.png',
  images: [],
    title: "Voigtlander Nokton 35mm f1.4",
    description: "",
    mechanics: "",
    optics:"",
    category: "Lenses",
    price: 559,
    sold: true
  },

]

const uniqueItems = (x, i, array) => array.indexOf(x) === i
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
)

PRODUCT_CATEGORIES.push("All")
PRODUCT_CATEGORIES.sort()

export default Products

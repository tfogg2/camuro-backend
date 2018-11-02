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

  { image: require('../../Assets/Products/canonA1-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/canonA1-1.png'), thumbnail: require('../../Assets/Products/canonA1-1-small.png')},
      {original: require('../../Assets/Products/canonA1-2.png'), thumbnail: require('../../Assets/Products/canonA1-2-small.png')},
      {original: require('../../Assets/Products/canonA1-3.png'), thumbnail: require('../../Assets/Products/canonA1-3-small.png')},
      {original: require('../../Assets/Products/canonA1-4.png'), thumbnail: require('../../Assets/Products/canonA1-4-small.png')},
      {original: require('../../Assets/Products/canonA1-5.png'), thumbnail: require('../../Assets/Products/canonA1-5-small.png')},
      {original: require('../../Assets/Products/canonA1-6.png'), thumbnail: require('../../Assets/Products/canonA1-6-small.png')},
      {original: require('../../Assets/Products/canonA1-7.png'), thumbnail: require('../../Assets/Products/canonA1-7-small.png')},
      {original: require('../../Assets/Products/canonA1-8.png'), thumbnail: require('../../Assets/Products/canonA1-8-small.png')},
      {original: require('../../Assets/Products/canonA1-9.png'), thumbnail: require('../../Assets/Products/canonA1-9-small.png')}
    ],
    title: "Canon A-1 w nFD 50mm f1.8",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 179,
    sold: false
  },

  { image: require('../../Assets/Products/canonFd50-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/canonFd50-1.png'), thumbnail: require('../../Assets/Products/canonFd50-1-small.png')},
      {original: require('../../Assets/Products/canonFd50-2.png'), thumbnail: require('../../Assets/Products/canonFd50-2-small.png')},
      {original: require('../../Assets/Products/canonFd50-3.png'), thumbnail: require('../../Assets/Products/canonFd50-3-small.png')},
      {original: require('../../Assets/Products/canonFd50-4.png'), thumbnail: require('../../Assets/Products/canonFd50-4-small.png')},
      {original: require('../../Assets/Products/canonFd50-5.png'), thumbnail: require('../../Assets/Products/canonFd50-5-small.png')},
      {original: require('../../Assets/Products/canonFd50-6.png'), thumbnail: require('../../Assets/Products/canonFd50-6-small.png')},
      {original: require('../../Assets/Products/canonFd50-7.png'), thumbnail: require('../../Assets/Products/canonFd50-7-small.png')},
      {original: require('../../Assets/Products/canonFd50-8.png'), thumbnail: require('../../Assets/Products/canonFd50-8-small.png')},
      {original: require('../../Assets/Products/canonFd50-9.png'), thumbnail: require('../../Assets/Products/canonFd50-9-small.png')},
      {original: require('../../Assets/Products/canonFd50-10.png'), thumbnail: require('../../Assets/Products/canonFd50-10-small.png')},
      {original: require('../../Assets/Products/canonFd50-11.png'), thumbnail: require('../../Assets/Products/canonFd50-11-small.png')},
    ],
    title: "Canon nF1 w nFD 50mm 1.8",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 359,
    sold: false
  },

  { image: require('../../Assets/Products/contaxT2-1-featured.png'),
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
    category: "Rangefinders",
    price: 799,
    sold: false
  },

  { image: require('../../Assets/Products/fujiGW-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/fujiGW-1.png'), thumbnail: require('../../Assets/Products/fujiGW-1-small.png')},
      {original: require('../../Assets/Products/fujiGW-2.png'), thumbnail: require('../../Assets/Products/fujiGW-2-small.png')},
      {original: require('../../Assets/Products/fujiGW-3.png'), thumbnail: require('../../Assets/Products/fujiGW-3-small.png')},
      {original: require('../../Assets/Products/fujiGW-4.png'), thumbnail: require('../../Assets/Products/fujiGW-4-small.png')},
      {original: require('../../Assets/Products/fujiGW-5.png'), thumbnail: require('../../Assets/Products/fujiGW-5-small.png')},
      {original: require('../../Assets/Products/fujiGW-6.png'), thumbnail: require('../../Assets/Products/fujiGW-6-small.png')},
      {original: require('../../Assets/Products/fujiGW-7.png'), thumbnail: require('../../Assets/Products/fujiGW-7-small.png')},
      {original: require('../../Assets/Products/fujiGW-8.png'), thumbnail: require('../../Assets/Products/fujiGW-8-small.png')},
      {original: require('../../Assets/Products/fujiGW-9.png'), thumbnail: require('../../Assets/Products/fujiGW-9-small.png')},
      {original: require('../../Assets/Products/fujiGW-10.png'), thumbnail: require('../../Assets/Products/fujiGW-10-small.png')},
      {original: require('../../Assets/Products/fujiGW-11.png'), thumbnail: require('../../Assets/Products/fujiGW-11-small.png')},
      {original: require('../../Assets/Products/fujiGW-12.png'), thumbnail: require('../../Assets/Products/fujiGW-12-small.png')},
      {original: require('../../Assets/Products/fujiGW-13.png'), thumbnail: require('../../Assets/Products/fujiGW-13-small.png')},
      {original: require('../../Assets/Products/fujiGW-14.png'), thumbnail: require('../../Assets/Products/fujiGW-14-small.png')},
    ],
    title: "Fuji GW670III 6x7 Rangefinder",
    description: "",
    mechanics: "",
    optics:"",
    category: "Rangefinders",
    price: 989,
    sold: false
  },

  { image: require('../../Assets/Products/konicaHex-1-featured.png'),
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
    category: "Rangefinders",
    price: 1499,
    sold: false
  },

  { image: require('../../Assets/Products/leicaM3-1-featured.png'),
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
    category: "Rangefinders",
    price: 949,
    sold: false
  },

  { image: require('../../Assets/Products/leicaRed-1-featured.png'),
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
    description: "",
    mechanics: "",
    optics:"",
    category: "Rangefinders",
    price: 329,
    sold: false
  },

  { image: require('../../Assets/Products/leicaSummi40-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/leicaSummi40-1.png'), thumbnail: require('../../Assets/Products/leicaSummi40-1-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-2.png'), thumbnail: require('../../Assets/Products/leicaSummi40-2-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-3.png'), thumbnail: require('../../Assets/Products/leicaSummi40-3-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-4.png'), thumbnail: require('../../Assets/Products/leicaSummi40-4-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-5.png'), thumbnail: require('../../Assets/Products/leicaSummi40-5-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-6.png'), thumbnail: require('../../Assets/Products/leicaSummi40-6-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-7.png'), thumbnail: require('../../Assets/Products/leicaSummi40-7-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-8.png'), thumbnail: require('../../Assets/Products/leicaSummi40-8-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-9.png'), thumbnail: require('../../Assets/Products/leicaSummi40-9-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-10.png'), thumbnail: require('../../Assets/Products/leicaSummi40-10-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-11.png'), thumbnail: require('../../Assets/Products/leicaSummi40-11-small.png')},
      {original: require('../../Assets/Products/leicaSummi40-12.png'), thumbnail: require('../../Assets/Products/leicaSummi40-12-small.png')},
    ],
    title: "Leica Summicron 40mm f2",
    description: "",
    mechanics: "",
    optics:"",
    category: "Lenses",
    price: 619,
    sold: false
  },

  { image: require('../../Assets/Products/leicaSummi50-13-featured.png'),
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
    category: "Lenses",
    price: 1749,
    sold: false
  },

  { image: require('../../Assets/Products/mamiya330-1-featured.png'),
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
    category: "TLRs",
    price: 999,
    sold: false
  },

  { image: require('../../Assets/Products/minolta7-1-featured.png'),
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
    description: "",
    mechanics: "",
    optics:"",
    category: "Rangefinders",
    price: 309,
    sold: false
  },

  { image: require('../../Assets/Products/minoltaMd-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/minoltaMd-1.png'), thumbnail: require('../../Assets/Products/minoltaMd-1-small.png')},
      {original: require('../../Assets/Products/minoltaMd-2.png'), thumbnail: require('../../Assets/Products/minoltaMd-2-small.png')},
      {original: require('../../Assets/Products/minoltaMd-3.png'), thumbnail: require('../../Assets/Products/minoltaMd-3-small.png')},
      {original: require('../../Assets/Products/minoltaMd-4.png'), thumbnail: require('../../Assets/Products/minoltaMd-4-small.png')},
      {original: require('../../Assets/Products/minoltaMd-5.png'), thumbnail: require('../../Assets/Products/minoltaMd-5-small.png')},
      {original: require('../../Assets/Products/minoltaMd-6.png'), thumbnail: require('../../Assets/Products/minoltaMd-6-small.png')},
      {original: require('../../Assets/Products/minoltaMd-7.png'), thumbnail: require('../../Assets/Products/minoltaMd-7-small.png')},
      {original: require('../../Assets/Products/minoltaMd-8.png'), thumbnail: require('../../Assets/Products/minoltaMd-8-small.png')},
      {original: require('../../Assets/Products/minoltaMd-9.png'), thumbnail: require('../../Assets/Products/minoltaMd-9-small.png')}
    ],
    title: "Minolta MD Rokkor-X 35mm f1.8",
    description: "",
    mechanics: "",
    optics:"",
    category: "Lenses",
    price: 229,
    sold: false
  },

  { image: require('../../Assets/Products/nikkor35-10-featured.png'),
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
    category: "Lenses",
    price: 399,
    sold: false
  },

  { image: require('../../Assets/Products/nikkorH-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/nikkorH-1.png'), thumbnail: require('../../Assets/Products/nikkorH-1-small.png')},
      {original: require('../../Assets/Products/nikkorH-2.png'), thumbnail: require('../../Assets/Products/nikkorH-2-small.png')},
      {original: require('../../Assets/Products/nikkorH-3.png'), thumbnail: require('../../Assets/Products/nikkorH-3-small.png')},
      {original: require('../../Assets/Products/nikkorH-4.png'), thumbnail: require('../../Assets/Products/nikkorH-4-small.png')},
      {original: require('../../Assets/Products/nikkorH-5.png'), thumbnail: require('../../Assets/Products/nikkorH-5-small.png')},
      {original: require('../../Assets/Products/nikkorH-6.png'), thumbnail: require('../../Assets/Products/nikkorH-6-small.png')},
      {original: require('../../Assets/Products/nikkorH-7.png'), thumbnail: require('../../Assets/Products/nikkorH-7-small.png')},
      {original: require('../../Assets/Products/nikkorH-8.png'), thumbnail: require('../../Assets/Products/nikkorH-8-small.png')}
    ],
    title: "Nikkor-H 28mm f3.5 non-Ai w HS-10 Hood",
    description: "",
    mechanics: "",
    optics:"",
    category: "Lenses",
    price: 99,
    sold: false
  },

  { image: require('../../Assets/Products/olympusEpic-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/olympusEpic-1.png'), thumbnail: require('../../Assets/Products/olympusEpic-1-small.png')},
      {original: require('../../Assets/Products/olympusEpic-2.png'), thumbnail: require('../../Assets/Products/olympusEpic-2-small.png')},
      {original: require('../../Assets/Products/olympusEpic-3.png'), thumbnail: require('../../Assets/Products/olympusEpic-3-small.png')},
      {original: require('../../Assets/Products/olympusEpic-4.png'), thumbnail: require('../../Assets/Products/olympusEpic-4-small.png')},
      {original: require('../../Assets/Products/olympusEpic-5.png'), thumbnail: require('../../Assets/Products/olympusEpic-5-small.png')},
      {original: require('../../Assets/Products/olympusEpic-6.png'), thumbnail: require('../../Assets/Products/olympusEpic-6-small.png')},
      {original: require('../../Assets/Products/olympusEpic-7.png'), thumbnail: require('../../Assets/Products/olympusEpic-7-small.png')},
      {original: require('../../Assets/Products/olympusEpic-8.png'), thumbnail: require('../../Assets/Products/olympusEpic-8-small.png')},
      {original: require('../../Assets/Products/olympusEpic-9.png'), thumbnail: require('../../Assets/Products/olympusEpic-9-small.png')},
      {original: require('../../Assets/Products/olympusEpic-10.png'), thumbnail: require('../../Assets/Products/olympusEpic-10-small.png')}
    ],
    title: "Olympus Stylus Epic 35mm 2.8 P&S",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 239,
    sold: false
  },

  { image: require('../../Assets/Products/olympusOm1-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/olympusOm1-1.png'), thumbnail: require('../../Assets/Products/olympusOm1-1-small.png')},
      {original: require('../../Assets/Products/olympusOm1-2.png'), thumbnail: require('../../Assets/Products/olympusOm1-2-small.png')},
      {original: require('../../Assets/Products/olympusOm1-3.png'), thumbnail: require('../../Assets/Products/olympusOm1-3-small.png')},
      {original: require('../../Assets/Products/olympusOm1-4.png'), thumbnail: require('../../Assets/Products/olympusOm1-4-small.png')},
      {original: require('../../Assets/Products/olympusOm1-5.png'), thumbnail: require('../../Assets/Products/olympusOm1-5-small.png')},
      {original: require('../../Assets/Products/olympusOm1-6.png'), thumbnail: require('../../Assets/Products/olympusOm1-6-small.png')},
      {original: require('../../Assets/Products/olympusOm1-7.png'), thumbnail: require('../../Assets/Products/olympusOm1-7-small.png')},
      {original: require('../../Assets/Products/olympusOm1-8.png'), thumbnail: require('../../Assets/Products/olympusOm1-8-small.png')},
      {original: require('../../Assets/Products/olympusOm1-9.png'), thumbnail: require('../../Assets/Products/olympusOm1-9-small.png')},
      {original: require('../../Assets/Products/olympusOm1-10.png'), thumbnail: require('../../Assets/Products/olympusOm1-10-small.png')}
    ],
    title: "Olympus OM-1 w Zuiko 50mm 1.4",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 229,
    sold: false
  },

  { image: require('../../Assets/Products/pentaxP3-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/pentaxP3-1.png'), thumbnail: require('../../Assets/Products/pentaxP3-1-small.png')},
      {original: require('../../Assets/Products/pentaxP3-2.png'), thumbnail: require('../../Assets/Products/pentaxP3-2-small.png')},
      {original: require('../../Assets/Products/pentaxP3-3.png'), thumbnail: require('../../Assets/Products/pentaxP3-3-small.png')},
      {original: require('../../Assets/Products/pentaxP3-4.png'), thumbnail: require('../../Assets/Products/pentaxP3-4-small.png')},
      {original: require('../../Assets/Products/pentaxP3-5.png'), thumbnail: require('../../Assets/Products/pentaxP3-5-small.png')},
      {original: require('../../Assets/Products/pentaxP3-6.png'), thumbnail: require('../../Assets/Products/pentaxP3-6-small.png')},
      {original: require('../../Assets/Products/pentaxP3-7.png'), thumbnail: require('../../Assets/Products/pentaxP3-7-small.png')},
      {original: require('../../Assets/Products/pentaxP3-8.png'), thumbnail: require('../../Assets/Products/pentaxP3-8-small.png')},
      {original: require('../../Assets/Products/pentaxP3-9.png'), thumbnail: require('../../Assets/Products/pentaxP3-9-small.png')},
      {original: require('../../Assets/Products/pentaxP3-10.png'), thumbnail: require('../../Assets/Products/pentaxP3-10-small.png')},
      {original: require('../../Assets/Products/pentaxP3-11.png'), thumbnail: require('../../Assets/Products/pentaxP3-11-small.png')},
    ],
    title: "Pentax P3",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 89,
    sold: false
  },

  { image: require('../../Assets/Products/voig-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/voig-1.png'), thumbnail: require('../../Assets/Products/voig-1-small.png')},
      {original: require('../../Assets/Products/voig-2.png'), thumbnail: require('../../Assets/Products/voig-2-small.png')},
      {original: require('../../Assets/Products/voig-3.png'), thumbnail: require('../../Assets/Products/voig-3-small.png')},
      {original: require('../../Assets/Products/voig-4.png'), thumbnail: require('../../Assets/Products/voig-4-small.png')},
      {original: require('../../Assets/Products/voig-5.png'), thumbnail: require('../../Assets/Products/voig-5-small.png')},
      {original: require('../../Assets/Products/voig-6.png'), thumbnail: require('../../Assets/Products/voig-6-small.png')},
      {original: require('../../Assets/Products/voig-7.png'), thumbnail: require('../../Assets/Products/voig-7-small.png')},
      {original: require('../../Assets/Products/voig-8.png'), thumbnail: require('../../Assets/Products/voig-8-small.png')},
      {original: require('../../Assets/Products/voig-9.png'), thumbnail: require('../../Assets/Products/voig-9-small.png')},
      {original: require('../../Assets/Products/voig-10.png'), thumbnail: require('../../Assets/Products/voig-10-small.png')},
      {original: require('../../Assets/Products/voig-11.png'), thumbnail: require('../../Assets/Products/voig-11-small.png')},
    ],
    title: "Voigtlander Nokton 35mm f1.4",
    description: "",
    mechanics: "",
    optics:"",
    category: "Lenses",
    price: 559,
    sold: false
  },

  { image: require('../../Assets/Products/canonet-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/canonet-1.png'), thumbnail: require('../../Assets/Products/canonet-1-small.png')},
      {original: require('../../Assets/Products/canonet-2.png'), thumbnail: require('../../Assets/Products/canonet-2-small.png')},
      {original: require('../../Assets/Products/canonet-3.png'), thumbnail: require('../../Assets/Products/canonet-3-small.png')},
      {original: require('../../Assets/Products/canonet-4.png'), thumbnail: require('../../Assets/Products/canonet-4-small.png')},
      {original: require('../../Assets/Products/canonet-5.png'), thumbnail: require('../../Assets/Products/canonet-5-small.png')},
      {original: require('../../Assets/Products/canonet-6.png'), thumbnail: require('../../Assets/Products/canonet-6-small.png')},
      {original: require('../../Assets/Products/canonet-7.png'), thumbnail: require('../../Assets/Products/canonet-7-small.png')},
      {original: require('../../Assets/Products/canonet-8.png'), thumbnail: require('../../Assets/Products/canonet-8-small.png')},
      {original: require('../../Assets/Products/canonet-9.png'), thumbnail: require('../../Assets/Products/canonet-9-small.png')},
      {original: require('../../Assets/Products/canonet-10.png'), thumbnail: require('../../Assets/Products/canonet-10-small.png')}
    ],
    title: "Canon Canonet Giii QL 17 w/ Canonlite D, Filter & Cap-Boxes",
    description: "",
    mechanics: "",
    optics:"",
    category: "SLRs",
    price: 299,
    sold: true
  },

  { image: require('../../Assets/Products/canonfd2-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/canonfd2-1.png'), thumbnail: require('../../Assets/Products/canonfd2-1-small.png')},
      {original: require('../../Assets/Products/canonfd2-2.png'), thumbnail: require('../../Assets/Products/canonfd2-2-small.png')},
      {original: require('../../Assets/Products/canonfd2-3.png'), thumbnail: require('../../Assets/Products/canonfd2-3-small.png')},
      {original: require('../../Assets/Products/canonfd2-4.png'), thumbnail: require('../../Assets/Products/canonfd2-4-small.png')},
      {original: require('../../Assets/Products/canonfd2-5.png'), thumbnail: require('../../Assets/Products/canonfd2-5-small.png')},
      {original: require('../../Assets/Products/canonfd2-6.png'), thumbnail: require('../../Assets/Products/canonfd2-6-small.png')},
      {original: require('../../Assets/Products/canonfd2-7.png'), thumbnail: require('../../Assets/Products/canonfd2-7-small.png')},
      {original: require('../../Assets/Products/canonfd2-8.png'), thumbnail: require('../../Assets/Products/canonfd2-8-small.png')},
      {original: require('../../Assets/Products/canonet-9.png'), thumbnail: require('../../Assets/Products/canonfd2-9-small.png')},
      {original: require('../../Assets/Products/canonfd2-10.png'), thumbnail: require('../../Assets/Products/canonfd2-10-small.png')}
    ],
    title: "Canon FD 50mm f1.2 with UV Filter, Caps & Case",
    description: "",
    mechanics:"",
    optics:"",
    category: "Lenses",
    price: 299,
    sold: true
  },

  { image: require('../../Assets/Products/contax167-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/contax167-1.png'), thumbnail: require('../../Assets/Products/contax167-1-small.png')},
      {original: require('../../Assets/Products/contax167-2.png'), thumbnail: require('../../Assets/Products/contax167-2-small.png')},
      {original: require('../../Assets/Products/contax167-3.png'), thumbnail: require('../../Assets/Products/contax167-3-small.png')},
      {original: require('../../Assets/Products/contax167-4.png'), thumbnail: require('../../Assets/Products/contax167-4-small.png')},
      {original: require('../../Assets/Products/contax167-5.png'), thumbnail: require('../../Assets/Products/contax167-5-small.png')},
      {original: require('../../Assets/Products/contax167-6.png'), thumbnail: require('../../Assets/Products/contax167-6-small.png')},
      {original: require('../../Assets/Products/contax167-7.png'), thumbnail: require('../../Assets/Products/contax167-7-small.png')},
      {original: require('../../Assets/Products/contax167-8.png'), thumbnail: require('../../Assets/Products/contax167-8-small.png')},
      {original: require('../../Assets/Products/contax167-9.png'), thumbnail: require('../../Assets/Products/contax167-9-small.png')},
      {original: require('../../Assets/Products/contax167-10.png'), thumbnail: require('../../Assets/Products/contax167-10-small.png')}
    ],
    title: "Contax 167mt SLR w/ Zeiss MMJ 45mm f2.8 Lens, Filter, Strap & Cap Combo",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 329,
    sold: true
  },

  { image: require('../../Assets/Products/contaxii-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/contaxii-1.png'), thumbnail: require('../../Assets/Products/contaxii-1-small.png')},
      {original: require('../../Assets/Products/contaxii-2.png'), thumbnail: require('../../Assets/Products/contaxii-2-small.png')},
      {original: require('../../Assets/Products/contaxii-3.png'), thumbnail: require('../../Assets/Products/contaxii-3-small.png')},
      {original: require('../../Assets/Products/contaxii-4.png'), thumbnail: require('../../Assets/Products/contaxii-4-small.png')},
      {original: require('../../Assets/Products/contaxii-5.png'), thumbnail: require('../../Assets/Products/contaxii-5-small.png')},
      {original: require('../../Assets/Products/contaxii-6.png'), thumbnail: require('../../Assets/Products/contaxii-6-small.png')},
      {original: require('../../Assets/Products/contaxii-7.png'), thumbnail: require('../../Assets/Products/contaxii-7-small.png')}
    ],
    title: "Contax iia 'Color Dial' Rangefinder w/ Zeiss-Opton Sonnar 5cm f1.5 Post War T Coated Lens",
    description: "",
    mechanics:"",
    optics:"",
    category: "Rangefinders",
    price: 419,
    sold: true
  },

  { image: require('../../Assets/Products/leicaiiib-1-featured.png'),
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
    title: 'Leica iiib Rangefinder, “Of Era, A.C. Muller” Modified Flash Synchro w/ Silver Body Cap',
    description: "",
    mechanics:"",
    optics:"",
    category: "Rangefinders",
    price: 339,
    sold: true
  },

  { image: require('../../Assets/Products/leicasummicron-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/leicasummicron-1.png'), thumbnail: require('../../Assets/Products/leicasummicron-1-small.png')},
      {original: require('../../Assets/Products/leicasummicron-2.png'), thumbnail: require('../../Assets/Products/leicasummicron-2-small.png')},
      {original: require('../../Assets/Products/leicasummicron-3.png'), thumbnail: require('../../Assets/Products/leicasummicron-3-small.png')},
      {original: require('../../Assets/Products/leicasummicron-4.png'), thumbnail: require('../../Assets/Products/leicasummicron-4-small.png')},
      {original: require('../../Assets/Products/leicasummicron-5.png'), thumbnail: require('../../Assets/Products/leicasummicron-5-small.png')},
      {original: require('../../Assets/Products/leicasummicron-6.png'), thumbnail: require('../../Assets/Products/leicasummicron-6-small.png')},
      {original: require('../../Assets/Products/leicasummicron-7.png'), thumbnail: require('../../Assets/Products/leicasummicron-7-small.png')},
      {original: require('../../Assets/Products/leicasummicron-8.png'), thumbnail: require('../../Assets/Products/leicasummicron-8-small.png')}
    ],
    title: "Leica Summaron 35 3.5 M Mount w/ Goggles & Hood",
    description: "",
    mechanics:"",
    optics:"",
    category: "Lenses",
    price: 519,
    sold: true
  },

  { image: require('../../Assets/Products/minoltam-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/minoltam-1.png'), thumbnail: require('../../Assets/Products/minoltam-1-small.png')},
      {original: require('../../Assets/Products/minoltam-2.png'), thumbnail: require('../../Assets/Products/minoltam-2-small.png')},
      {original: require('../../Assets/Products/minoltam-3.png'), thumbnail: require('../../Assets/Products/minoltam-3-small.png')},
      {original: require('../../Assets/Products/minoltam-4.png'), thumbnail: require('../../Assets/Products/minoltam-4-small.png')},
      {original: require('../../Assets/Products/minoltam-5.png'), thumbnail: require('../../Assets/Products/minoltam-5-small.png')},
      {original: require('../../Assets/Products/minoltam-6.png'), thumbnail: require('../../Assets/Products/minoltam-6-small.png')},
      {original: require('../../Assets/Products/minoltam-7.png'), thumbnail: require('../../Assets/Products/minoltam-7-small.png')},
      {original: require('../../Assets/Products/minoltam-8.png'), thumbnail: require('../../Assets/Products/minoltam-8-small.png')},
      {original: require('../../Assets/Products/minoltam-9.png'), thumbnail: require('../../Assets/Products/minoltam-9-small.png')},
      {original: require('../../Assets/Products/minoltam-10.png'), thumbnail: require('../../Assets/Products/minoltam-10-small.png')}
    ],
    title: "Minolta M-Rokkor 40mm f2 with Minolta Cap, UV Filter & Case",
    description: "",
    mechanics:"",
    optics:"",
    category: "Lenses",
    price: 499,
    sold: true
  },

  { image: require('../../Assets/Products/nikonf1-3-featured.png'),
    images: [
      {original: require('../../Assets/Products/nikonf1-3.png'), thumbnail: require('../../Assets/Products/nikonf1-3-small.png')},
      {original: require('../../Assets/Products/nikonf1-2.png'), thumbnail: require('../../Assets/Products/nikonf1-2-small.png')},
      {original: require('../../Assets/Products/nikonf1-1.png'), thumbnail: require('../../Assets/Products/nikonf1-1-small.png')},
      {original: require('../../Assets/Products/nikonf1-4.png'), thumbnail: require('../../Assets/Products/nikonf1-4-small.png')},
      {original: require('../../Assets/Products/nikonf1-5.png'), thumbnail: require('../../Assets/Products/nikonf1-5-small.png')},
      {original: require('../../Assets/Products/nikonf1-6.png'), thumbnail: require('../../Assets/Products/nikonf1-6-small.png')},
      {original: require('../../Assets/Products/nikonf1-7.png'), thumbnail: require('../../Assets/Products/nikonf1-7-small.png')},
      {original: require('../../Assets/Products/nikonf1-8.png'), thumbnail: require('../../Assets/Products/nikonf1-8-small.png')},
      {original: require('../../Assets/Products/nikonf1-9.png'), thumbnail: require('../../Assets/Products/nikonf1-9-small.png')}
    ],
    title: "Nikon F w/ 45mm 2.8 Pancake Lens & UV Filter",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 279,
    sold: true
  },

  { image: require('../../Assets/Products/nikonfpho-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/nikonfpho-1.png'), thumbnail: require('../../Assets/Products/nikonfpho-1-small.png')},
      {original: require('../../Assets/Products/nikonfpho-2.png'), thumbnail: require('../../Assets/Products/nikonfpho-2-small.png')},
      {original: require('../../Assets/Products/nikonfpho-3.png'), thumbnail: require('../../Assets/Products/nikonfpho-3-small.png')},
      {original: require('../../Assets/Products/nikonfpho-4.png'), thumbnail: require('../../Assets/Products/nikonfpho-4-small.png')},
      {original: require('../../Assets/Products/nikonfpho-5.png'), thumbnail: require('../../Assets/Products/nikonfpho-5-small.png')},
      {original: require('../../Assets/Products/nikonfpho-6.png'), thumbnail: require('../../Assets/Products/nikonfpho-6-small.png')},
      {original: require('../../Assets/Products/nikonfpho-7.png'), thumbnail: require('../../Assets/Products/nikonfpho-7-small.png')},
      {original: require('../../Assets/Products/nikonfpho-8.png'), thumbnail: require('../../Assets/Products/nikonfpho-8-small.png')},
      {original: require('../../Assets/Products/nikonfpho-9.png'), thumbnail: require('../../Assets/Products/nikonfpho-9-small.png')},
      {original: require('../../Assets/Products/nikonfpho-10.png'), thumbnail: require('../../Assets/Products/nikonfpho-10-small.png')},
      {original: require('../../Assets/Products/nikonfpho-11.png'), thumbnail: require('../../Assets/Products/nikonfpho-11-small.png')}
    ],
    title: "Nikon F Photomic w/ 50mm f1.4 & Original Half Case",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 329,
    sold: true
  },

  { image: require('../../Assets/Products/nikonf2w50-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/nikonf2w50-1.png'), thumbnail: require('../../Assets/Products/nikonf2w50-1-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-2.png'), thumbnail: require('../../Assets/Products/nikonf2w50-2-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-3.png'), thumbnail: require('../../Assets/Products/nikonf2w50-3-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-4.png'), thumbnail: require('../../Assets/Products/nikonf2w50-4-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-5.png'), thumbnail: require('../../Assets/Products/nikonf2w50-5-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-6.png'), thumbnail: require('../../Assets/Products/nikonf2w50-6-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-7.png'), thumbnail: require('../../Assets/Products/nikonf2w50-7-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-8.png'), thumbnail: require('../../Assets/Products/nikonf2w50-8-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-9.png'), thumbnail: require('../../Assets/Products/nikonf2w50-9-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-10.png'), thumbnail: require('../../Assets/Products/nikonf2w50-10-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-11.png'), thumbnail: require('../../Assets/Products/nikonf2w50-11-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-12.png'), thumbnail: require('../../Assets/Products/nikonf2w50-12-small.png')},
      {original: require('../../Assets/Products/nikonf2w50-13.png'), thumbnail: require('../../Assets/Products/nikonf2w50-13-small.png')}
    ],
    title: "Nikon F2 w/ Nikkor 50mm 1.4",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 279,
    sold: true
  },

  { image: require('../../Assets/Products/nikonf2-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/nikonf2-1.png'), thumbnail: require('../../Assets/Products/nikonf2-1-small.png')},
      {original: require('../../Assets/Products/nikonf2-2.png'), thumbnail: require('../../Assets/Products/nikonf2-2-small.png')},
      {original: require('../../Assets/Products/nikonf2-3.png'), thumbnail: require('../../Assets/Products/nikonf2-3-small.png')},
      {original: require('../../Assets/Products/nikonf2-4.png'), thumbnail: require('../../Assets/Products/nikonf2-4-small.png')},
      {original: require('../../Assets/Products/nikonf2-5.png'), thumbnail: require('../../Assets/Products/nikonf2-5-small.png')},
      {original: require('../../Assets/Products/nikonf2-6.png'), thumbnail: require('../../Assets/Products/nikonf2-6-small.png')},
      {original: require('../../Assets/Products/nikonf2-7.png'), thumbnail: require('../../Assets/Products/nikonf2-7-small.png')},
      {original: require('../../Assets/Products/nikonf2-8.png'), thumbnail: require('../../Assets/Products/nikonf2-8-small.png')},
      {original: require('../../Assets/Products/nikonf2-9.png'), thumbnail: require('../../Assets/Products/nikonf2-9-small.png')},
      {original: require('../../Assets/Products/nikonf2-10.png'), thumbnail: require('../../Assets/Products/nikonf2-10-small.png')},
      {original: require('../../Assets/Products/nikonf2-11.png'), thumbnail: require('../../Assets/Products/nikonf2-11-small.png')},
      {original: require('../../Assets/Products/nikonf2-12.png'), thumbnail: require('../../Assets/Products/nikonf2-12-small.png')},
      {original: require('../../Assets/Products/nikonf2-13.png'), thumbnail: require('../../Assets/Products/nikonf2-13-small.png')},
      {original: require('../../Assets/Products/nikonf2-14.png'), thumbnail: require('../../Assets/Products/nikonf2-14-small.png')}
    ],
    title: "Nikon F2 w/ D-11 & Waist-Lever Finders",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 279,
    sold: true
  },

  { image: require('../../Assets/Products/nikonf3-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/nikonf3-1.png'), thumbnail: require('../../Assets/Products/nikonf3-1-small.png')},
      {original: require('../../Assets/Products/nikonf3-2.png'), thumbnail: require('../../Assets/Products/nikonf3-2-small.png')},
      {original: require('../../Assets/Products/nikonf3-3.png'), thumbnail: require('../../Assets/Products/nikonf3-3-small.png')},
      {original: require('../../Assets/Products/nikonf3-4.png'), thumbnail: require('../../Assets/Products/nikonf3-4-small.png')},
      {original: require('../../Assets/Products/nikonf3-5.png'), thumbnail: require('../../Assets/Products/nikonf3-5-small.png')},
      {original: require('../../Assets/Products/nikonf3-7.png'), thumbnail: require('../../Assets/Products/nikonf3-7-small.png')},
      {original: require('../../Assets/Products/nikonf3-8.png'), thumbnail: require('../../Assets/Products/nikonf3-8-small.png')},
      {original: require('../../Assets/Products/nikonf3-9.png'), thumbnail: require('../../Assets/Products/nikonf3-9-small.png')}
    ],
    title: "Nikon F3 w/ Original Strap, Body Cap & MD-4 Motor Drive",
    description: "",
    mechanics:"",
    optics:"",
    category: "SLRs",
    price: 229,
    sold: true
  },

  { image: require('../../Assets/Products/mamya7-9-featured.png'),
    images: [
      {original: require('../../Assets/Products/mamya7-9.png'), thumbnail: require('../../Assets/Products/mamya7-9-small.png')},
      {original: require('../../Assets/Products/mamya7-2.png'), thumbnail: require('../../Assets/Products/mamya7-2-small.png')},
      {original: require('../../Assets/Products/mamya7-3.png'), thumbnail: require('../../Assets/Products/mamya7-3-small.png')},
      {original: require('../../Assets/Products/mamya7-4.png'), thumbnail: require('../../Assets/Products/mamya7-4-small.png')},
      {original: require('../../Assets/Products/mamya7-5.png'), thumbnail: require('../../Assets/Products/mamya7-5-small.png')},
      {original: require('../../Assets/Products/mamya7-6.png'), thumbnail: require('../../Assets/Products/mamya7-6-small.png')},
      {original: require('../../Assets/Products/mamya7-7.png'), thumbnail: require('../../Assets/Products/mamya7-7-small.png')},
      {original: require('../../Assets/Products/mamya7-8.png'), thumbnail: require('../../Assets/Products/mamya7-8-small.png')},
      {original: require('../../Assets/Products/mamya7-1.png'), thumbnail: require('../../Assets/Products/mamya7-1-small.png')},
      {original: require('../../Assets/Products/mamya7-10.png'), thumbnail: require('../../Assets/Products/mamya7-10-small.png')},
      {original: require('../../Assets/Products/mamya7-11.png'), thumbnail: require('../../Assets/Products/mamya7-11-small.png')},
      {original: require('../../Assets/Products/mamya7-12.png'), thumbnail: require('../../Assets/Products/mamya7-12-small.png')},
      {original: require('../../Assets/Products/mamya7-13.png'), thumbnail: require('../../Assets/Products/mamya7-13-small.png')}
    ],
    title: "Mamiya 7ii 6x7 Medium Format Rangefinder w/ 65mm f4 Lens, Original Caps & Hood",
    description: "",
    mechanics:"",
    optics:"",
    category: "Rangefinders",
    price: 3719,
    sold: true
  },

  { image: require('../../Assets/Products/o95-4-featured.png'),
    images: [
      {original: require('../../Assets/Products/o95-4.png'), thumbnail: require('../../Assets/Products/o95-4-small.png')},
      {original: require('../../Assets/Products/o95-2.png'), thumbnail: require('../../Assets/Products/o95-2-small.png')},
      {original: require('../../Assets/Products/o95-3.png'), thumbnail: require('../../Assets/Products/o95-3-small.png')},
      {original: require('../../Assets/Products/o95-1.png'), thumbnail: require('../../Assets/Products/o95-1-small.png')},
      {original: require('../../Assets/Products/o95-5.png'), thumbnail: require('../../Assets/Products/o95-5-small.png')},
      {original: require('../../Assets/Products/o95-6.png'), thumbnail: require('../../Assets/Products/o95-6-small.png')},
      {original: require('../../Assets/Products/o95-7.png'), thumbnail: require('../../Assets/Products/o95-7-small.png')},
      {original: require('../../Assets/Products/o95-8.png'), thumbnail: require('../../Assets/Products/o95-8-small.png')},
      {original: require('../../Assets/Products/o95-9.png'), thumbnail: require('../../Assets/Products/o95-9-small.png')},
      {original: require('../../Assets/Products/o95-10.png'), thumbnail: require('../../Assets/Products/o95-10-small.png')},
      {original: require('../../Assets/Products/o95-11.png'), thumbnail: require('../../Assets/Products/o95-11-small.png')}
    ],
    title: "Canon 7 Rangefinder w/ Canon 50mm f0.95 “Dream Lens” w/ Original Filter & Caps",
    description: "",
    mechanics:"",
    optics:"",
    category: "Rangefinders",
    price: 2850,
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

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
          .map(({ product, category, title, description, price, index, image, images, sold }) => (
            <div className="product-box">
              <div>
                <Product key={`ProductItems-${title}`} toggleModal={this.toggleModal} isOpen={this.state.isOpen} product={product} images={images} image={image} index={index} sold={sold} category={category} title={title} description={description} price={price} addProduct={this.props.addProduct} />
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 279,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 279,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 329,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Rangefinders",
    price: 419,
    sold: false
  },

  { image: require('../../Assets/Products/konicabigmini-1-featured.png'),
    images: [
      {original: require('../../Assets/Products/konicabigmini-1.png'), thumbnail: require('../../Assets/Products/konicabigmini-1-small.png')},
      {original: require('../../Assets/Products/konicabigmini-2.png'), thumbnail: require('../../Assets/Products/konicabigmini-2-small.png')},
      {original: require('../../Assets/Products/konicabigmini-3.png'), thumbnail: require('../../Assets/Products/konicabigmini-3-small.png')},
      {original: require('../../Assets/Products/konicabigmini-4.png'), thumbnail: require('../../Assets/Products/konicabigmini-4-small.png')},
      {original: require('../../Assets/Products/konicabigmini-5.png'), thumbnail: require('../../Assets/Products/konicabigmini-5-small.png')},
      {original: require('../../Assets/Products/konicabigmini-6.png'), thumbnail: require('../../Assets/Products/konicabigmini-6-small.png')},
      {original: require('../../Assets/Products/konicabigmini-7.png'), thumbnail: require('../../Assets/Products/konicabigmini-7-small.png')}
    ],
    title: "Konica Big Mini BM-302 Pocket Camera w/ Original Konica Strap",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Pocket Cameras",
    price: 179,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Rangefinders",
    price: 339,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Lenses",
    price: 519,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 229,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 279,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 279,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 329,
    sold: false
  },

  { image: require('../../Assets/Products/zeiss135-5-featured.png'),
    images: [
      {original: require('../../Assets/Products/zeiss135-5.png'), thumbnail: require('../../Assets/Products/zeiss135-5-small.png')},
      {original: require('../../Assets/Products/zeiss135-2.png'), thumbnail: require('../../Assets/Products/zeiss135-2-small.png')},
      {original: require('../../Assets/Products/zeiss135-3.png'), thumbnail: require('../../Assets/Products/zeiss135-3-small.png')},
      {original: require('../../Assets/Products/zeiss135-4.png'), thumbnail: require('../../Assets/Products/zeiss135-4-small.png')},
      {original: require('../../Assets/Products/zeiss135-1.png'), thumbnail: require('../../Assets/Products/zeiss135-1-small.png')},
      {original: require('../../Assets/Products/zeiss135-6.png'), thumbnail: require('../../Assets/Products/zeiss135-6-small.png')},
      {original: require('../../Assets/Products/zeiss135-7.png'), thumbnail: require('../../Assets/Products/zeiss135-7-small.png')}
    ],
    title: "Zeiss 135mm f4 Sonnar-Contax RF",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Lenses",
    price: 119,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Rangefinders",
    price: 2850,
    sold: true
  },

  { image: require('../../Assets/Products/yashica124-9-featured.png'),
    images: [
      {original: require('../../Assets/Products/yashica124-9.png'), thumbnail: require('../../Assets/Products/yashica124-9-small.png')},
      {original: require('../../Assets/Products/yashica124-2.png'), thumbnail: require('../../Assets/Products/yashica124-2-small.png')},
      {original: require('../../Assets/Products/yashica124-3.png'), thumbnail: require('../../Assets/Products/yashica124-3-small.png')},
      {original: require('../../Assets/Products/yashica124-4.png'), thumbnail: require('../../Assets/Products/yashica124-4-small.png')},
      {original: require('../../Assets/Products/yashica124-5.png'), thumbnail: require('../../Assets/Products/yashica124-5-small.png')},
      {original: require('../../Assets/Products/yashica124-6.png'), thumbnail: require('../../Assets/Products/yashica124-6-small.png')},
      {original: require('../../Assets/Products/yashica124-7.png'), thumbnail: require('../../Assets/Products/yashica124-7-small.png')},
      {original: require('../../Assets/Products/yashica124-8.png'), thumbnail: require('../../Assets/Products/yashica124-8-small.png')},
      {original: require('../../Assets/Products/yashica124-1.png'), thumbnail: require('../../Assets/Products/yashica124-1-small.png')},
      {original: require('../../Assets/Products/yashica124-10.png'), thumbnail: require('../../Assets/Products/yashica124-10-small.png')}
    ],
    title: "Yashica 124G 6x6 Medium Format TLR",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "TLRs",
    price: 289,
    sold: true
  },

  { image: require('../../Assets/Products/canonfd-7-featured.png'),
    images: [
      {original: require('../../Assets/Products/canonfd-7.png'), thumbnail: require('../../Assets/Products/canonfd-7-small.png')},
      {original: require('../../Assets/Products/canonfd-2.png'), thumbnail: require('../../Assets/Products/canonfd-2-small.png')},
      {original: require('../../Assets/Products/canonfd-3.png'), thumbnail: require('../../Assets/Products/canonfd-3-small.png')},
      {original: require('../../Assets/Products/canonfd-4.png'), thumbnail: require('../../Assets/Products/canonfd-4-small.png')},
      {original: require('../../Assets/Products/canonfd-5.png'), thumbnail: require('../../Assets/Products/canonfd-5-small.png')},
      {original: require('../../Assets/Products/canonfd-6.png'), thumbnail: require('../../Assets/Products/canonfd-6-small.png')},
      {original: require('../../Assets/Products/canonfd-1.png'), thumbnail: require('../../Assets/Products/canonfd-1-small.png')},
      {original: require('../../Assets/Products/canonfd-8.png'), thumbnail: require('../../Assets/Products/canonfd-8-small.png')},
      {original: require('../../Assets/Products/canonfd-9.png'), thumbnail: require('../../Assets/Products/canonfd-9-small.png')},
      {original: require('../../Assets/Products/canonfd-10.png'), thumbnail: require('../../Assets/Products/canonfd-10-small.png')},
      {original: require('../../Assets/Products/canonfd-11.png'), thumbnail: require('../../Assets/Products/canonfd-11-small.png')}
    ],
    title: "Canon nFD 28mm f2 In Box w/ Original Caps & Hood",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Lenses",
    price: 279,
    sold: true
  },

  { image: require('../../Assets/Products/olympuspen-01-featured.png'),
    images: [
      {original: require('../../Assets/Products/olympuspen-01.png'), thumbnail: require('../../Assets/Products/olympuspen-01-small.png')},
      {original: require('../../Assets/Products/olympuspen-02.png'), thumbnail: require('../../Assets/Products/olympuspen-02-small.png')},
      {original: require('../../Assets/Products/olympuspen-03.png'), thumbnail: require('../../Assets/Products/olympuspen-03-small.png')},
      {original: require('../../Assets/Products/olympuspen-04.png'), thumbnail: require('../../Assets/Products/olympuspen-04-small.png')},
      {original: require('../../Assets/Products/olympuspen-05.png'), thumbnail: require('../../Assets/Products/olympuspen-05-small.png')},
      {original: require('../../Assets/Products/olympuspen-06.png'), thumbnail: require('../../Assets/Products/olympuspen-06-small.png')},
      {original: require('../../Assets/Products/olympuspen-07.png'), thumbnail: require('../../Assets/Products/olympuspen-07-small.png')},
      {original: require('../../Assets/Products/olympuspen-08.png'), thumbnail: require('../../Assets/Products/olympuspen-08-small.png')},
      {original: require('../../Assets/Products/olympuspen-09.png'), thumbnail: require('../../Assets/Products/olympuspen-09-small.png')}
    ],
    title: "Olympus Pen Ft Half-Frame SLR w/ Zuiko 38mm f1.8 Lens, Filter & Original Cap",
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "SLRs",
    price: 249,
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

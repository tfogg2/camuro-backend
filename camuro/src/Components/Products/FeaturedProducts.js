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
      products: PRODUCTS,
      position: 0
    }
  }

  getOrder(itemIndex) {
    const  {position}  = this.state
    const  children  = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide = () => {
    const  position  = this.state
    const  children  = this.props
    const numItems = children.length || 1
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    })
  }

  doSliding = (position) => {
    this.setState({
      sliding: true,
      position
    })
    setTimeout(() => {
     this.setState({
        sliding: false
      })
    }, 50)
  }


  render() {
    const CarouselSlot = styled.div`
      order: ${(props) => props.order};
    `
    const ProductItems = ({ state: { products, displayCategory } }) => (
      <div className="carousel">
        {products
          .map(({ product, category, title, description, price, index, image, images, sold }) => (
            <CarouselSlot key={ index } order={ this.getOrder(index) }>
              <FeaturedProduct key={index} toggleModal={this.toggleModal} isOpen={this.state.isOpen} product={product} images={images} image={image} index={index} sold={sold} category={category} title={title} description={description} price={price} addProduct={this.props.addProduct} />
            </CarouselSlot>
          ))}
          <button onClick={ () => this.nextSlide() } style={{position:'absolute'}}>Next</button>
      </div>
    )
    const UI = ({
      state,
      state: { productCategories, products },
      setCategory,
      AllProducts,
    }) => (
      <ProductItems state={state} />
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
    price: 299,
    sold: false
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Lenses",
    price: 299,
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
    description: "Cosmetically in excellent condition. We do our best to show the cameras in a strong and revealing light. Please zoom and inspect the hi-res images and feel free to ask us any questions before purchase. We don’t sell junkers. Ever",
    category: "Lenses",
    price: 499,
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

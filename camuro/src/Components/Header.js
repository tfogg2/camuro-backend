import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'
import Dropdown from './Dropdown'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: [
        {
          id: 0,
          url:'/products',
          title: 'Shop',
          selected: false,
          key: 'menu'
        },
        {
          id: 1,
          url:'/gallery',
          title: 'Photos',
          selected: false,
          key: 'menu'
        },
        {
          id: 2,
          url:'/offer',
          title: 'Sell Gear',
          selected: false,
          key: 'menu'
        },
        {
          id: 3,
          url:'/cart',
          title: 'Cart',
          selected: false,
          key: 'menu'
        }
      ]
    }
    this.toggleSelected = this.toggleSelected.bind(this);
  }
  toggleSelected(id, key){
    let temp = this.state[key]
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }
  render(){
    const products = this.props.cartProducts
    if(products.length > 0 ){
      return(
        <div className="header">
          <div className="logo">
            <h1>
              <Link exact="true" to="/">
                camuro
              </Link>
            </h1>
          </div>
          <div className="nav">
            <div  className="right-nav">
              <Dropdown
                title="Menu"
                list={this.state.menu}
                toggleItem={this.toggleSelected}
              />
            </div>
          </div>
        </div>
      )
    }
    else {
      return(
        <div className="header">
          <div className="logo">
            <h1>
              <Link exact="true" to="/">
                camuro
              </Link>
            </h1>
          </div>
          <div className="nav">
            <div  className="right-nav">
              <Dropdown
                title="Menu"
                list={this.state.menu}
                toggleItem={this.toggleSelected}
              />
            </div>
          </div>
        </div>
      )
    }
  }
}


export default Header;

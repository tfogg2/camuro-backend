import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'

class Header extends Component {
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
              <ul className="navLinks">
                <li className="shop-link">
                  <NavLink to="/products">
                    <button>
                      Shop
                    </button>
                  </NavLink>
                </li>
                <li className="scrollLink no-mobile">
                  <NavLink to="/offer">
                    <button>
                      Sell
                    </button>
                  </NavLink>
                </li>
                <li className="scrollLink">
                  <NavLink to="/gallery">
                    <button>
                      Photos
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cart">
                    <button>
                      <img src={require("../Assets/bag-full.svg")} alt="Cart"/>
                    </button>
                  </NavLink>
                </li>
              </ul>
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
              <ul className="navLinks">
                <li className="shop-link">
                  <NavLink to="/products">
                    <button>
                      Shop
                    </button>
                  </NavLink>
                </li>
                <li className="scrollLink no-mobile">
                  <NavLink to="/offer">
                    <button>
                      Sell
                    </button>
                  </NavLink>
                </li>
                <li className="scrollLink">
                  <NavLink to="/gallery">
                    <button>
                      Photos
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cart">
                    <button>
                      <img src={require("../Assets/bag-small.svg")} alt="Cart"/>
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default Header;

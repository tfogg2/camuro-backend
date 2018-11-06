import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import onClickOutside from "react-onclickoutside"

class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    const ddClass = this.state.listOpen ? 'dd-open dd-wrapper' : 'dd-wrapper'
    const products = this.props.cartProducts
    const cartClass = products.length > 0 ? 'dd-list-item dd-cart' : 'dd-list-item dd-cart dd-cart-empty'
    return(
      <div className={ddClass}>
        <div className="dd-header" onClick={() => this.toggleList()}>
           <img className="dd-btn-open" src={require('../Assets/dd-btn-open.svg')} alt="Menu" />
           <img className="dd-btn"src={require('../Assets/dd-btn.svg')} alt="Menu" />
        </div>
         <ul className="dd-list">
         {list.map((item) => (
           item.title === 'Cart' ?
            <NavLink to={item.url}><li className={cartClass} onClick={() => this.toggleList()}>{item.title} ({products.length})</li></NavLink>
          :
            <NavLink to={item.url}><li className="dd-list-item" onClick={() => this.toggleList()}>{item.title}</li></NavLink>


         ))}
        </ul>
      </div>
    )
  }
}

export default Dropdown;

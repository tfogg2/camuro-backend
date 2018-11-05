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
    return(
      <div className={ddClass}>
        <div className="dd-header" onClick={() => this.toggleList()}>
           <img className="dd-btn-open" src={require('../Assets/dd-btn-open.svg')} alt="Menu" />
           <img className="dd-btn"src={require('../Assets/dd-btn.svg')} alt="Menu" />
        </div>
         <ul className="dd-list">
         {list.map((item) => (
           <NavLink to={item.url}><li className="dd-list-item" onClick={() => this.props.toggleItem(item.id, item.key)}>{item.title}</li></NavLink>
         ))}
        </ul>
      </div>
    )
  }
}

export default Dropdown;

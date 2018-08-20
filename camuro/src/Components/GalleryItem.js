import React, {Component} from 'react'


class GalleryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isOpen: false
    }
    this.handleHover = this.handleHover.bind(this)
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isHovered: false
    });
  }

  stopClose = (e) => {
    e.stopPropagation()
  }

  handleHover(){
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

  render(){
    const hoverClass = this.state.isHovered ? "gallery-image hovered" : "gallery-image"
    return(
      <div className={hoverClass} onMouseOver={this.handleHover} onMouseLeave={this.handleHover} >
        <img src={this.props.image} alt={this.props.title}/>
      </div>
    )
  }
}


      // <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
      //   <div className="cover"></div>
      //   <img src={require("../Assets/leica-r7.png")} alt="leica-r7" />
      // </div>


export default GalleryItem

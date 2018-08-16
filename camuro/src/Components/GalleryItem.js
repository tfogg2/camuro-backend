import React, {Component} from 'react'
import Modal from './Modal'

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
      <div className='gallery-item'>
        <div className={hoverClass} onMouseOver={this.handleHover} onMouseLeave={this.handleHover} onClick={this.toggleModal}>
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <Modal show={this.state.isOpen} onClose={this.toggleModal} stopClose={this.stopClose} image={this.props.image} title={this.props.title} credit={this.props.credit}>
        </Modal>
      </div>
    )
  }
}


      // <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
      //   <div className="cover"></div>
      //   <img src={require("../Assets/leica-r7.png")} alt="leica-r7" />
      // </div>


export default GalleryItem

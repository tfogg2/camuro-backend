import React from 'react'
import PropTypes from 'prop-types'

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" onClick={this.props.onClose}>
        <div className="modal" onClick={this.props.stopClose}>
          <img src={this.props.image} alt={this.props.title} />
          <div className="modal-footer">
            <a href={this.props.credit} target="_blank"><h4>{this.props.title}</h4></a>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;

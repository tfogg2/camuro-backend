import React, {Component} from 'react';

class Footer extends Component {

  render(){
    return(
      <div className="footer">
        <a href="https://www.instagram.com/camuro.co/" target="_blank" alt="camuro-instagram">
          <div className="instagram"></div>
        </a>

        <div className="vermont">
          <p>Winooski, VT</p>
          <img src={require('../Assets/vermont.svg')} alt="vermont" />
        </div>
      </div>
    )
  }
}


export default Footer;

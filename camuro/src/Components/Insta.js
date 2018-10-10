import React, {Component} from 'react'
import Instafeed from 'react-instafeed'

const instafeedTarget = 'instafeed'

class Insta extends Component{
  render(){
    return(
      <Instafeed
        limit='10'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-liked'
        target={this.props.instafeedTarget}
        template='gallery-item'
        userId={`${process.env.REACT_APP_INSTAGRAM_USER_ID}`}
        clientId={`${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}`}
        accessToken={`${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`}
      />
    )
  }
}

export default Insta

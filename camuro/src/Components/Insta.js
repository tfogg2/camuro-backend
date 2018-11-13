import React, {Component} from 'react'
import Instafeed from 'react-instafeed'
import Fade from 'react-reveal/Fade'
import _ from 'lodash'


class Insta extends Component {
    constructor(props) {
      super(props);
      this.state = {
        gallery: GALLERY,
        loaded: false
      }
    }

    componentDidMount() {
      _.delay( () => {
        this.setState({
          loaded: true
        })
        window.scrollTo(0, 0)
      }, 400 )
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const instafeedTarget = this.state.loaded ? 'instafeed visible' : 'instafeed'

        const template = `<div class="gallery-item insta-item"><div><a href='{{link}}' target='_blank' class='instafeed__item'>
                                  <img class='instafeed__item__background img-responsive' src='{{image}}' />
                                    <div class='instafeed__item__overlay'>
                                      <div class='instafeed__item__overlay--inner'>
                                        <span class='instafeed__item__caption' style='display: none'>{{model.short_caption}}</span>
                                        <span class='instafeed__item__location' style='display: none'>{{location}}</span>
                                      </div>
                                    </div>
                                </a></div></div>`;

        return (
            <div>
              <div id={instafeedTarget}></div>
              <Instafeed
                  limit='20'
                  ref='instafeed'
                  resolution='standard_resolution'
                  sortBy='most-recent'
                  target={instafeedTarget}
                  template={template}
                  userId={process.env.REACT_APP_INSTAGRAM_USER_ID}
                  clientId={process.env.REACT_APP_INSTAGRAM_CLIENT_ID}
                  accessToken={process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}
              />
            </div>
        )
    }
}

const GALLERY = [
  { image: require("../Assets/annie-spratt-2.png"), title: "Annie Spratt", credit: "https://unsplash.com/@anniespratt"}
]

export default Insta;

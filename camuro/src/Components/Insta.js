import React, {Component} from 'react'
import Instafeed from 'react-instafeed'

const instafeedTarget = 'instafeed';

const template = `<div class="gallery-item insta-item"><div><a href='{{link}}' target='_blank' class='instafeed__item'>
                          <img class='instafeed__item__background img-responsive' src='{{image}}' />
                            <div class='instafeed__item__overlay'>
                              <div class='instafeed__item__overlay--inner'>
                                <span class='instafeed__item__caption' style='display: none'>{{model.short_caption}}</span>
                                <span class='instafeed__item__location' style='display: none'>{{location}}</span>
                              </div>
                            </div>
                        </a></div></div>`;

class Insta extends Component {

    componentDidMount() {

    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
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
export default Insta;

import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import GalleryItem from './GalleryItem.js'
import Pagination from "react-js-pagination"
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'




class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY,
      isOpen: false,
      activePage: 15
    }
  }

  // Pagination
  componentDidMount() {
    const { data: allPhotos = [] } = GALLERY;
    this.setState({ allPhotos });
  }
  onPageChanged = data => {
    const { allPhotos } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPhotos = allPhotos.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentPhotos, totalPages });
  }


  render(){
    const { currentPhotos, currentPage, totalPages } = this.state
    const allPhotos = this.state
    const totalPhotos = allPhotos.length

    if (totalPhotos === 0) return null;


    const Gallery = ({state:{ gallery }}) => (
      <div>
        {gallery
          .map(({image, title, credit}) => (
          <GalleryItem key={title} title={title} image={image} credit={credit} />
        ))}
      </div>
    )

    const UI = ({ state, state: { gallery },  }) => (
      <div className="gallery">
        <div className="gallery-header">
          <img src={require('../Assets/photos.svg')} alt="photos" />
          <p>Photos for the people. By the people.</p>
        </div>
        <div className="gallery-items">
          <Gallery itemsCountPerPage={4} state={state}/>
        </div>
      </div>
    )

    return <UI state={this.state}  />

  }
}

const GALLERY = [
  { image: require("../Assets/chad-dalke-mini.jpg"), title: "Chad Dalke", credit: "https://unsplash.com/photos/4fydl6bJT8k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},
  { image: require("../Assets/filtergrade-nikon-mini.jpg"), title: "Filter Grade", credit: "https://unsplash.com/photos/vn5MU5VwdjQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},
  { image: require("../Assets/joseph-chan-mini.jpg"), title: "Joseph Chan", credit: "https://unsplash.com/photos/99Ty_Vme3wA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},
  { image: require("../Assets/jesus-santos-mini.jpg"), title: "Jesus Santos", credit: "https://unsplash.com/photos/_T3upUiCqEE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},
  { image: require("../Assets/stephen-cook-mini.jpg"), title: "Stephen Cook", credit: "https://unsplash.com/photos/g1iJMOu0sIg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},
  { image: require("../Assets/sebastian-pichler-mini.jpg"), title: "Sebastian Pichler", credit: "https://unsplash.com/photos/MDGpwpMY2Ws?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},
]

export default Gallery;

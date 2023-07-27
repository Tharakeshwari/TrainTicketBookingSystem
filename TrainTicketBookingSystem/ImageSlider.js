import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  // padding: '20px',
  marginLeft:"750px",
  marginTop:"70px",
  color: 'Black',
  fontSize:"60px"
}

const divStyle = {
  // marginTop:"120px",
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://wallpapercave.com/wp/wp2783293.jpg',
    caption: 'Explore Kerala'
  },
  {
    url: 'https://cdn.kimkim.com/files/a/images/b96ba41156dcc891c67bc924e2f12b5934a737ca/big-9476f3f7df82139166c780f864b64479.jpg',
    caption: 'Explore TamilNadu'
  },
  {
    url: 'https://www.go2holiday.com/wp-content/uploads/2013/01/India-Famous-Tourist-Places-Tajmahal.jpg',
    caption: 'Explore Agra'
  },
];

function ImageSlider(){
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default ImageSlider;
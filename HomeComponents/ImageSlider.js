import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  marginLeft:"750px",
  color: 'white',
  fontSize:"60px"
}

const divStyle = {
  marginTop:"120px",
  display: 'flex',
  alignItems: 'center',
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
    url: 'https://c1.staticflickr.com/3/2376/1544772235_2b8cdb3aec_b.jpg',
    caption: 'Explore Chennai'
  },
  {
    url: 'https://www.go2holiday.com/wp-content/uploads/2013/01/India-Famous-Tourist-Places-Tajmahal.jpg',
    caption: 'Explore Agra'
  },
];

function ImageSlider(){
    return (
      <div className="slide-container"style={{position:"relative"}}>
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
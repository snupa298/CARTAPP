import React from 'react'
import { Carousel } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const ProductCarouselComponent = ({bestSellers}) => {

const cursorP={
    cursor:"pointer"
}

//console.log(bestSellers)

  return bestSellers.length > 0 ? (
    <Carousel>
      {bestSellers.map((item,idx)=>(
        <Carousel.Item key={idx}>
      <img
      crossOrigin='anonymous'
        className="d-block w-100"
        style={{height:"300px",objectFit:"cover"}}
       // src={item.images ? item.images[0].path : null}
       src="/images/carousel/carousel-3.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <LinkContainer style={cursorP} to={`/product-details/${item._id}`}>
        <h3>Best seller in {item.category}</h3>
        </LinkContainer>
     
        <p>Dell Inspiron 15 3000 Laptop,15.6 in HD</p>
      </Carousel.Caption>
    </Carousel.Item>
      ))}
    
   
    {/* <Carousel.Item>
      <img
      crossOrigin="anonymous" 
        className="d-block w-100"
        style={{height:"300px",objectFit:"cover"}}
        src="/images/carousel/carousel-3.png"
        alt="Third slide"
      />

      <Carousel.Caption>
      <LinkContainer style={cursorP} to="/product-details">
        <h3>Best seller in camera category</h3>
        </LinkContainer>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item> */}
  </Carousel>
  ) : null;
}

export default ProductCarouselComponent

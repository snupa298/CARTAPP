import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const CategoryCardComponent = ({category,idx}) => {

    // const images=[
    //     "/images/tablets-category.png",
    //     "/images/tablets-category.png",
    //     "/images/tablets-category.png",
    //     "/images/tablets-category.png",
    //     "/images/tablets-category.png",
    //     "/images/tablets-category.png",
    //     "/images/tablets-category.png",
    //     "/images/tablets-category.png",
    // ]
  return (
    <Card>
      <Card.Img variant="top" src={category.image ?? null} />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>
      {category.description}
        </Card.Text>
        <LinkContainer to={`/product-list/category/${category.name}`}>
        <Button variant="primary">Go to Category</Button>
        </LinkContainer>

      </Card.Body>
    </Card>
  )
}

export default CategoryCardComponent

import React,{useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AddedToCartMessageComponent = ({showCartMessage,setShowCartMessage}) => {

  const navigate = useNavigate();

  const goBack = () =>{
    navigate(-1);
  }

  return (
    <Alert variant="success" onClose={() => setShowCartMessage(false)} show={showCartMessage} dismissible>
    <Alert.Heading>The product was added to your cart</Alert.Heading>
    <p>
    <Button variant="success" onClick={goBack}>Go Back</Button>{" "}
    <Link to="/cart">
    <Button variant="danger">Go to Cart</Button>
    </Link>
 
    </p>
  </Alert>
  )
}

export default AddedToCartMessageComponent

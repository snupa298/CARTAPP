import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import '../index.css'

const FooterComponrnt = () => {
  return (
    <footer>
<Container fluid>
    <Row className='mt-5'>
        <Col className='bg-dark text-white text-center py-5'>Copyright &copy:Best online shop</Col>
    </Row>
   </Container>
    </footer>
   
  )
}

export default FooterComponrnt

import React, { useEffect, useState } from 'react'
import { Row,Col,Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLinkComponent from '../../../components/admin/AdminLinkComponent'
import { logout } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const OrdersPageComponent = ({getOrders,deleteOrder}) => {

  const dispatch=useDispatch();

const [orders,setOrders]=useState([])
const [orderDeleted,setOrderDeleted]=useState(false)

useEffect(()=>{
getOrders()
.then((orders)=>setOrders(orders))
.catch((er) => 
dispatch(logout())
  //console.log(er.response.data.message ? er.response.data.message : er.response.data)
  )
},[])

const deleteHandler = async(orderId) => {
  if (window.confirm("Are you sure?")) {
   // alert("User Deleted")
const data  = await deleteOrder(orderId)
if(data === "Order removed"){
  setOrderDeleted(!orderDeleted)
}
  }
};

  return (
    <Row className="m-5">
      <Col md={2}>
        Admin links
        <AdminLinkComponent/>
      </Col>
      <Col md={10}>
<h1>My Orders</h1>
<Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Date</th>
          <th>Total</th>
          <th>Delivered</th>
          <th>Payment Method</th>
          <th>Order Details</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order,idx)=>(


<tr key={idx}>
<td>{idx+1}</td>
<td>
{order.user !== null ? (
    <>
    {order.user.name} {order.user.lastName}
    </>
) : null}
</td>
<td>{order.createdAt.substring(0,10)}</td>
<td>${order.orderTotal.cartSubtotal}</td>
<td>
{order.isDelivered ? <i className='bi bi-check-lg text-success'></i> : <i className='bi bi-x-lg text-danger'></i>}
</td>
<td>{order.paymentMethod}</td>
<td>
  <Link to={`/admin/order-details/${order._id}`}>Go to order</Link>
</td>
<td>
<Button
                      variant="danger"
                      className="btn-sm"
                      onClick={()=>deleteHandler(order._id)}
                    >
                      <i className="bi bi-x-circle"></i>
                    </Button>
</td>
</tr>

        ))}
      
       
      </tbody>
    </Table>
      </Col>
    </Row>
  )
}

export default OrdersPageComponent

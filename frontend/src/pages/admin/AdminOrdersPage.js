import OrdersPageComponent from "./components/OrdersPageComponent"
import axios from "axios"

const getOrders = async()=>{
  const {data} = await axios.get("/api/orders/admin")
  return data
}

const deleteOrder = async(orderId)=>{
  const {data} = await axios.delete(`/api/orders/${orderId}`)
  return data
}

const AdminOrdersPage = () => {
  return <OrdersPageComponent getOrders={getOrders} deleteOrder={deleteOrder}/>
}

export default AdminOrdersPage

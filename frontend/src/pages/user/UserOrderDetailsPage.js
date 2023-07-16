import axios from "axios";
import { useSelector } from "react-redux";
import UserOrderDetailsPageComponent from "./components/UserOrderDetailsPageComponent";
import { loadScript } from "@paypal/paypal-js";



const UserOrderDetailsPage = () => {

const userInfo = useSelector(state => state.userRegisterLogin.userInfo)

const getUser = async (id) =>{
// const {data} = await axios.get("/api/users/profile/:id")
 const {data} = await axios.get("/api/users/profile/"+ id)
return data;
}

const loadPayPalScript = (cartSubtotal,cartItems)=>{
  loadScript({"client-id":"AWQyyUtcGDgg3XtPQPdn-BNKYgV9NRJ3Dl9ngQL4ygGt8yNBTB13C-Z7OHdOxPSiexd-At1r7hiKK5Jk"})
  .then(paypal =>{

     paypal.Buttons(buttons(cartSubtotal,cartItems))
     .render("#paypal-container-element")
  })
  .catch(err =>{
      console.error("failed to load paypal js SDK script",err)
  })
}

const buttons = (cartSubtotal, cartItems) => {
  return {
      createOrder: function (data, actions) {
          return actions.order.create({
              purchase_units: [
                  {
                      amount: {
                          value: cartSubtotal,
                          breakdown: {
                              item_total: {
                                  currency_code: "USD",
                                  value: cartSubtotal,
                              }
                          }
                      },
                      items: cartItems.map(product => {
                          return {
                             name: product.name,
                              unit_amount: {
                                 currency_code: "USD", 
                                 value: product.price,
                              },
                              quantity: product.quantity,
                          }
                      })
                  }
              ]
          })
      },
      onCancel: onCancelHandler,
      onApprove: onApproveHandler,
      onError: onErrorHandler,
  }
}


const onCancelHandler = function () {
  console.log("cancel");
}

const onApproveHandler = function () {
  console.log("onApproveHandler");
}

const onErrorHandler = function (err) {
  console.log("error");
}

const getOrder = async(id) =>{

  const {data} = await axios.get(`/api/orders/user/${id}`)
  return data;
}

  return   <UserOrderDetailsPageComponent userInfo={userInfo} getUser={getUser} getOrder={getOrder}
  loadPayPalScript={loadPayPalScript} />
          
};

export default UserOrderDetailsPage;

import UserCartDetailsPageComponent from "./components/UserCartDetailsPageComponent";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import axios from "axios";


const UserCartDetailsPage = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const itemsCount = useSelector((state) => state.cart.itemsCount);
    const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
    const userInfo = useSelector((state)=>state.userRegisterLogin.userInfo)

const getUser = async () =>{
 // const {data} = await axios.get("/api/users/profile/6474e189280fdd8b507f051f" + userInfo._id)
  const {data} = await axios.get("/api/users/profile/:id")
  return data;
}

const createOrder = async(orderData)=>{
const {data} = await axios.post("/api/orders/",{...orderData})
return data;
}

    const reduxDispatch = useDispatch();

  return <UserCartDetailsPageComponent cartItems={cartItems} itemsCount={itemsCount} cartSubtotal={cartSubtotal}
   addToCart={addToCart} removeFromCart={removeFromCart} reduxDispatch={reduxDispatch} 
    getUser={getUser}
    userInfo={userInfo}
    createOrder={createOrder}
    />;
};

export default UserCartDetailsPage;

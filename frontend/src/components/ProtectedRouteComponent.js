 import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";

const ProtectedRouteComponent = ({ admin }) => {


if(admin){
    let adminAuth=true;
 
    return adminAuth ? <Outlet/> : <Navigate to="/login"/>
}
else{
    let userAuth=true;

    return userAuth ? <><UserChatComponent/><Outlet/></> : <Navigate to="/login"/>
}

}

 export default ProtectedRouteComponent;



//  import { useState } from "react";
// import { Outlet, Navigate, useNavigate } from "react-router-dom";
//  import UserChatComponent from "./user/UserChatComponent";
//  import LoginPage from "../pages/LoginPage"
 
//  const ProtectedRouteComponent = ({ admin }) => {
   
 
//  const[isAuth,setIsAuth]=useState()

//  if(isAuth === undefined) return <LoginPage/>

//  return isAuth && admin && isAuth !== "admin" ? (
//     <Navigate to="/login"/>
//  ) : isAuth && admin ? (
//  <Outlet/> 

//  ) : isAuth && !admin ? (
//     <>
//     <UserChatComponent/>
//     <Outlet/>
//     </>
//  ): (

//      <Navigate to="/login"/>
//  )
//  }
 
//   export default ProtectedRouteComponent;
import React from 'react'
import { Outlet } from 'react-router-dom'
import UserChatComponent from './UserChatComponent.js'

const RoutesWithUserChatComponent = () => {
  return (
   <>
   <UserChatComponent/>
   <Outlet/>
   </>
  )
}

export default RoutesWithUserChatComponent

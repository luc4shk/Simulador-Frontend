import React from "react"
import { Navigate, Outlet} from "react-router-dom"
export default function ProtectedRoute({isValid, children}){

  if(!isValid){
    return <Navigate to="/"/>
  } 

  return  children ? children : <Outlet/>
}

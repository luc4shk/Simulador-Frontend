import {React, createContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode';
import { refreshToken } from '../../services/user/axios.service';
import {useStatStyles} from '@chakra-ui/react';

export const AppContext = createContext();

export function AppProvider({children}) {

  const [open, setOpen] = useState(false);
  const change = () => setOpen(!open);
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [id, setId] = useState(null)
  const [token, setToken] = useState(()=>localStorage.getItem("token"))
  const [imagen, setImagen] = useState()

  useEffect(()=>{
    setImagen(localStorage.getItem("imagen"))
    if(token){
      decodeToken("token")
    }
  },[])

  
  const decodeToken = (a) =>{
    const decode = jwt_decode(localStorage.getItem(a))
    const rol = decode.tipo
    const email = decode.username
    const id = decode.id
    setId(id)
    setRole(rol)
    setUser(email)
  }

  return (
    <AppContext.Provider value={{open,change, user,setImagen,imagen, setUser, token,role,setRole, setToken, id, setId}}>
      {children}
    </AppContext.Provider>
  )
}

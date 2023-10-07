import React,{useContext} from 'react'
import Page from '../../../components/container/Page'
import { AppContext } from '../../../components/context/AppProvider'

export default function PruebasUser() {
    
  const {open, change} = useContext(AppContext)

  return (
    <Page changeOpen={change} isOpen={open} componente={<div>Pruebas</div>} msg={"Pruebas"} />
    )
}


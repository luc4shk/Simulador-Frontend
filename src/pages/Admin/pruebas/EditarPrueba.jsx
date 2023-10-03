import React,{useContext} from 'react'
import Page from '../../../components/container/Page'
import FormularioCompetencia from '../../../components/forms/FormularioCompetencia'
import { AppContext } from '../../../components/context/AppProvider'
import FormularioPrueba from '../../../components/forms/FormularioPrueba'
import CompetenciaForm from './CompetenciaForm'

export default function EditarPrueba() {
  const {open, change} = useContext(AppContext)
  return (
    <Page changeOpen={change} isOpen={open} componente={<CompetenciaForm/>} msg={"Pruebas"} />
    )
}

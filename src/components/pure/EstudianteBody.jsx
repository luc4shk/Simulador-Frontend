import React,{useContext, useEffect, useState} from 'react'
import TablaEstudiantes from './TablaEstudiantes';
import { Center } from '@chakra-ui/react';
import { RiEdit2Fill, RiDeleteBin2Fill} from "react-icons/ri";

export default function EstudianteBody() {
  const columns = [ "Nombres",
    "Apellidos",
    "Correo",
    "Estado",
    "Editar",
    "Resultado",
  ];


  return (
      <TablaEstudiantes columns={columns} path={""} />
    )
}

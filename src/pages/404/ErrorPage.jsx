import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

export default function ErrorPage({role}) {

    const redirectTo = () => {
    if (role === 'Administrador') {
      return '/home'; // Redirige al panel de administrador
    } else if (role === 'Estudiante') {
      return '/user'; // Redirige al panel de estudiante
    } else {
      return '/'; // Redirige a la página de inicio por defecto
    }
  };

  return (
    <Flex
      minHeight={"100vh"}
      position={"relative"}
      transition={"all 0.5s"}
      flexDir={"column"}
      bgColor={"secundario.100"}
      >
      <Flex position={"relative"} w={"100%"} h={"100%"}>
      <Text>404 Error</Text>
        <Button as={Link} to={redirectTo()}>Go to Home</Button>
    </Flex>
    </Flex>
    

  )
}

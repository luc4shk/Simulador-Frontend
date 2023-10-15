import React from "react";
import { SimpleGrid,Text,  CardHeader, CardBody, Button, Card , Heading, CardFooter} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function ConvocatoriaBodyUser(){
  return(
  <SimpleGrid spacing={4} 
    columns={{ base: 1, md: 2, lg: 3 }}

  >
  <Card>
  <CardHeader>
    <Heading size='md'>Evaluación 1</Heading>
  </CardHeader>
  <CardBody>
    <Text>Esta evaluación evalúa tus habilidades en matemáticas.</Text>
  </CardBody>
  <CardFooter>
    <Button as={Link}>Iniciar Prueba</Button>
  </CardFooter>
</Card>
<Card>
  <CardHeader>
    <Heading size='md'>Evaluación 2</Heading>
  </CardHeader>
  <CardBody>
    <Text>Esta evaluación se enfoca en tus conocimientos en ciencias sociales.</Text>
  </CardBody>
  <CardFooter>
    <Button as={Link}>Iniciar Prueba</Button>
  </CardFooter>
</Card>
<Card>
  <CardHeader>
    <Heading size='md'>Evaluación 3</Heading>
  </CardHeader>
  <CardBody>
    <Text>Esta evaluación pondrá a prueba tus habilidades de administración.</Text>
  </CardBody>
  <CardFooter>
    <Button as={Link}>Iniciar Prueba</Button>
  </CardFooter>
</Card>

</SimpleGrid>
  )
}

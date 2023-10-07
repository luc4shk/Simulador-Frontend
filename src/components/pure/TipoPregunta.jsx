import React from "react";
import { Card, CardHeader, Heading , CardBody, CardFooter, Text} from "@chakra-ui/react";
import Btn from "./Btn";
export default function TipoPregunta() {
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md"> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter w={"100%"} display={"flex"} flexDir={["column","column","row"]} gap={["20px","20px","0px"]} alignItems={"center"} justifyContent={"space-between"} >
        <Btn
          colorScheme={"blue"}
          msg={"Preguntas Simples"}
          path={"/formularioPreguntaSimple"}
          w={"204px"}
        />
        <Btn      
          msg={"Preguntas con Imagen"} 
          path={"/formularioPreguntaImagen"} 
         
           />
      </CardFooter>
    </Card>
  );
}

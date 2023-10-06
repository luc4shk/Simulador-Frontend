import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

function ConvocatoriaBodyUser() {
  const pruebas = [
    "prueba1",
    "prueba2",
    "prueba3",
    "prueba4",
  ];

  return (
    <Box w={"100%"} display="flex" justifyContent="center" mt={"50px"}>
      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
        gap={4}
        alignItems="center"
      >
        {pruebas.map((prueba, index) => (
          <GridItem
            key={index}
            p={"20px"}
            borderRadius={"8px"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bgColor={"white"}
            minW={["200px", "310px", "270px", "320px", "370px"]}
            maxHeight={"auto"}
            overflow={"hidden"}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {/* <Text
              textAlign="center"
              style={{ wordBreak: "break-all" }}
              lineHeight="1.2"
              fontSize="16px"
            > */}
              {prueba}
            {/* </Text> */}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default ConvocatoriaBodyUser;

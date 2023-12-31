import React from "react";
import NavBar from "../NavBar";
import { Flex, Button, Image, Icon } from "@chakra-ui/react";

export default function Page({ changeOpen, isOpen , componente, msg}) {
  return (
    <Flex
      w={isOpen ? "100%" : ["calc(100% - 70px)","calc(100% - 70px)","calc(100% - 200px)"]}
      minHeight={"100vh"}
      left={isOpen ? "0px" : ["70px","70px","200px"]}
      position={"relative"}
      transition={"all 0.5s"}
      flexDir={"column"}
      bgColor={"cuarto.100"}
      >
      <NavBar
        changeOpen={changeOpen}
        msg={msg}
        isOpen={isOpen}
      />
      <Flex
        justifyContent={"center"}
        p={"20px"}
        minH={"calc(100% - 60px)"}
        minW={"calc(100% - 200px)"}
      >
      {componente}
      </Flex>
    </Flex>
  );
}

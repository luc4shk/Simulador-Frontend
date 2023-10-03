import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Btn({ isSubmit=false,w,leftIcon, msg, path }) {
  if (isSubmit) {
    return (
      <Button leftIcon={leftIcon} w={w} type="submit" cursor={"pointer"}>
        {msg}
      </Button>
    );
  } else {
    return (
      <Link to={path}>
        <Button leftIcon={leftIcon} w={w} cursor={"pointer"}>{msg}</Button>
      </Link>
    );
  }
}

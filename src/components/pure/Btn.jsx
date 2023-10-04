import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Btn({ isSubmit=false,w,leftIcon,bg, msg, path,textColor, mt}) {
  if (isSubmit) {
    return (
      <Button leftIcon={leftIcon} w={w} type="submit" cursor={"pointer"} mt={mt} textColor={textColor} bgColor={bg}
      >
        {msg}
      </Button>
    );
  } else {
    return (
      <Link to={path}>
        <Button bgColor={bg} leftIcon={leftIcon} w={w} cursor={"pointer"} mt={mt}>{msg}</Button>
      </Link>
    );
  }
}

"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoInformationCircle } from "react-icons/io5";

const AboutIcon = (props: ChakraProps) => {
  return <Icon as={IoInformationCircle} {...props} />;
};

export default AboutIcon;

"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa6";

const ConferenceIcon = (props: ChakraProps) => {
  return <Icon as={FaUsers} {...props} />;
};

export default ConferenceIcon;

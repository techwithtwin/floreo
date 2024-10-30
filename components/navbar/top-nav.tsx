import { socials, topNavRightIcons } from "@/utils/constants";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const TopNav = () => {
  return (
    <Flex justify="space-between" align="center" pt="2rem" pb=".8rem">
      <Flex gap={4} align="center">
        {socials.map((social, index) => (
          <Box
            as={social.icon}
            color="primary.200"
            key={index}
            boxSize={5}
            aria-label={social.name}
          />
        ))}
      </Flex>
      <Flex gap={4} align="center">
        {topNavRightIcons.map((d, i) => (
          <Box
            as={d.icon}
            color="primary.200"
            aria-label={d.name}
            key={i}
            boxSize={5}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default TopNav;

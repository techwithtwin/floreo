import { marginX } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const servicesData = [
  {
    icon: "/quality-plants.svg",
    title: "Quality Plants",
    description: "We provide a high quality products",
  },
  {
    icon: "/plant-renovation.svg",
    title: "Plant Renovation",
    description: "We provide a high quality products",
  },
  {
    icon: "/seed-supply.svg",
    title: "Seed Supply",
    description: "We provide a high quality products",
  },
  {
    icon: "/custom-design.svg",
    title: "Custom Design",
    description: "We provide a high quality products",
  },
];

const ServicesSection = () => {
  return (
    <Stack
      bgImage="/flowers-pattern.svg"
      py="7rem"
      bgColor="#2e4e2a"
      bgBlendMode="luminosity"
      pos="relative"
      _after={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        bottom: 0,
        bg: "rgba(10, 46, 20, .8)",
      }}
    >
      <Stack
        zIndex={2}
        gap="2rem"
        marginX={marginX}
        align="center"
        textAlign="center"
      >
        <Heading color="primary.300" fontSize="xl" textTransform="uppercase">
          About our services
        </Heading>
        <Heading color="brand.white" maxW="3xl">
          We just love our work and plant nature, so we provide a high quality
          products
        </Heading>
        <SimpleGrid mt=".5rem" columns={{ base: 1, md: 4 }} spacing={8}>
          {servicesData.map((d, i) => (
            <Stack gap={3} key={i} align="center" bg="primary.400" p={8}>
              <Box>
                <Image src={d.icon} width={65} height={65} alt={d.title} />
              </Box>
              <Heading fontSize="2xl" color="brand.white">
                {d.title}
              </Heading>
              <Text>{d.description}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default ServicesSection;

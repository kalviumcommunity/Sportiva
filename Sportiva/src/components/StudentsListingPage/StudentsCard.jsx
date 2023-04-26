import {Flex, Box, Heading} from "@chakra-ui/react";


export default function StudentsCard() {
  return (
    <>
      <Box
        bgImage="url('/images/background-img.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={730}
        mt={0}
      >
        <Flex mt={0}>
          <Heading
            size="xl"
            padding="60px"
            fontFamily="Oswald" 
            fontWeight="bold"
            bgGradient="linear(to right,#9E0033,#9E0033,#012385,#012385)"
            bgClip="text"
            color="transparent"
          >
            SPORTIVA
          </Heading>
        </Flex>
      </Box>
    </>
  );
}

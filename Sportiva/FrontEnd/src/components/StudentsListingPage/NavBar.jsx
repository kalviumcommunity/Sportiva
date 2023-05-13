import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    
      <Box
        bgRepeat="no-repeat"
        bgSize="cover"
        paddingTop="25px"
      >
        <Flex  alignItems="center">
          <Flex flex="1" justifyContent="center">
            <Heading
              size="xl"
              bgGradient="linear(to right,#9E0033,#9E0033,#012385,#012385)"
              bgClip="text"
              color="transparent"
            >
              SPORTIVA
            </Heading>
          </Flex>
          <Link to="/">
          <Button
            bg="#AD0036"
            color="white"
            w="105px"
            h="36px"
            fontSize={12}
            fontWeight="semibold"
          >
            Sign out
          </Button>
          </Link>
        </Flex>
      </Box>
    
  );
}

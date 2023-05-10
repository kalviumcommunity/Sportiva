import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box bgRepeat="no-repeat" bgSize="cover" paddingTop="25px">
       <Flex alignItems="center" px={"40px"}>
        <Box>
          <Link to="/students-listing">
            <Image src="/images/LeftArrow.png" alt="img" boxSize="40px" />
          </Link>
        </Box>
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
        <Flex>
          <Link to="/">
            <Image src="/images/Share.png" pr="26px" />
          </Link>
          <Link to="/">
            <Image src="/images/AddProperties.png" pr="66px" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

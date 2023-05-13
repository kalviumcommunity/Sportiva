import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomModal from "./Modal";
import PropTypes from "prop-types";


export default function NavBar({ newSessionCount }) {
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
          <Image src="/images/Share.png" pr="26px" />
          <CustomModal newSessionCount={newSessionCount} />
        </Flex>
      </Flex>
    </Box>
  );
}
NavBar.propTypes = {
  newSessionCount: PropTypes.number,
};

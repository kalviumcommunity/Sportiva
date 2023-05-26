import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import CustomModal from "./Modal";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar({ newSessionCount }) {
  const { id } = useParams();
  const { isAuthenticated } = useAuth0();
  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(function(){
    alert("Link copied!");
    });
   
  };

  return (
    <Box bgRepeat="no-repeat" bgSize="cover" paddingTop="25px">
      <Flex alignItems="center" px={"40px"}>
        <Box>
          {isAuthenticated && (
            <Link to="/students-listing">
              <Image src="/images/LeftArrow.png" alt="img" boxSize="40px" />
            </Link>
          )}
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
          <Image
            src="/images/Share.png"
            pr="26px"
            onClick={handleShareClick}
            style={{ cursor: "pointer" }}
          />
          <CustomModal newSessionCount={newSessionCount} id={id} />
        </Flex>
      </Flex>
    </Box>
  );
}

NavBar.propTypes = {
  newSessionCount: PropTypes.number,
};

import { Input, Image, Box, Flex, Divider } from "@chakra-ui/react";
import NavBar from "./NavBar";

export default function ToolBar(props) {
  return (
    <>
      <Box px="94px">
        <NavBar />
        <Flex justifyContent="space-between">
          <Image
            src="/images/addstudent.svg"
            alt="img"
            boxSize="40px"
            mt="110px"
          />
          <Input
            placeholder="Find students"
            h="45px"
            w="628px"
            border="1px"
            borderColor="black"
            borderRadius="4px"
            mt="103px"
            fontWeight="Regular"
            onChange={props.handleSearch}
          />
        </Flex>
        <Divider borderColor="#E3E3E3" mt="29" />
      </Box>
    </>
  );
}

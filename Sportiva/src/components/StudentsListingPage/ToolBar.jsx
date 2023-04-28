import { Input, Image, Box, Flex, Divider } from "@chakra-ui/react";
import NavBar from "./NavBar";

// eslint-disable-next-line react/prop-types
export default function ToolBar({handleSearch}) {
  return (
    <>
      <Box px="94px">
        <NavBar />
        <Flex justifyContent="space-between">
          <Image
            src="/images/AddStudent.svg"
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
            fontWeight="regular"
            onChange={handleSearch}
          />
        </Flex>
        <Divider borderColor="#E3E3E3" mt="29" />
      </Box>
    </>
  );
}

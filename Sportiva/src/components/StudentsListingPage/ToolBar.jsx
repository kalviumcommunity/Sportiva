import { Input, Image, Box, Flex, Divider } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
// import StudentForm from "../../pages/AddStudentForm/StudentForm";

// eslint-disable-next-line react/prop-types
export default function ToolBar({handleSearch}) {
  return (
  
      <Box px="94px">
        <NavBar />
        <Flex alignItems="flex-end"  justifyContent="space-between">
          <Link to="/StudentForm">
          <Image
            src="/images/AddStudent.svg"
            alt="img"
            boxSize="40px"
            mt="110px"
            mr="1000px"
          />
          </Link>
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
    
  );
}

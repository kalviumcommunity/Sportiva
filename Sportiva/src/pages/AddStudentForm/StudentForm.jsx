import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import data from "../../components/StudentsListingPage/Data";
import UploadAndDisplayImage from "./ImageUpload";
// import { Line } from "rc-progress";
// import Uploady, { useItemProgressListener } from "@rpldy/uploady";
// import UploadButton from "@rpldy/upload-button";
// import { createMockSender } from "@rpldy/sender";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [beltGrade, setBeltGrade] = useState("");
  const [yearsOfExp, setYearsOfExp] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  // const [image, setImage] = useState("");

  function addStudent() {
    const newStudent = {
      id: data.length.toString(),
      name: name,
      yearsOfExp: yearsOfExp,
      belt_grade: beltGrade,
      // image: image,
      coach_notes: [],
    };
    // Add new student object to data array
    data.push(newStudent);

    // Reset form fields
    setName("");
    setBeltGrade("");
    setYearsOfExp("");
    setDateOfBirth("");
  }

  return (
    <Box bgRepeat="no-repeat" bgSize="cover" paddingTop="20px" px="31px">
      <Flex alignItems="center">
        <Box>
          <Link to="/StudentsListing">
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
      </Flex>
      <Flex
        bg="white"
        w="1141px"
        h="531px"
        borderRadius="md"
        boxShadow="md"
        justifyContent="center"
        alignItems="center"
        ml="246px"
        mt="75px"
      >
        <VStack w="100%">
          <Flex
            flex="1"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            px="31px"
            mb="50px"
          >
            <Heading fontSize="26px" ml="495px">
              Add Student
            </Heading>
            <Link to="/StudentsListing">
              <Button
                h="36px"
                w="105px"
                ml="auto"
                bg="#AD0036"
                color="white"
                fontSize={12}
                fontWeight="semibold"
                onClick={addStudent}
              >
                Add
              </Button>
            </Link>
          </Flex>
          <Flex w="100%">
            <Box
              // value={image}
              w="210px"
              h="210px"
              bgColor="black"
              borderRadius="10px"
              ml="159px"
              mt="65px"
              alignItems="center"
            >
             <UploadAndDisplayImage/>
            </Box>
            <Box w="400px" ml="155px">
              <FormControl mb="22px">
                <FormLabel fontWeight="semibold">Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                />
              </FormControl>
              <FormControl mb="22px">
                <FormLabel fontWeight="semibold">Date of Birth</FormLabel>
                <Input
                  type="text"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                />
              </FormControl>
              <FormControl mb="22px">
                <FormLabel fontWeight="semibold">Belt grade</FormLabel>
                <Input
                  type="text"
                  value={beltGrade}
                  onChange={(e) => setBeltGrade(e.target.value)}
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="semibold">Years of experience</FormLabel>
                <Input
                  type="number"
                  value={yearsOfExp}
                  onChange={(e) => setYearsOfExp(e.target.value)}
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                />
              </FormControl>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}

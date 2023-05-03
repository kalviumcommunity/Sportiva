import {Flex, Box, Heading, Image, VStack, FormControl, FormLabel, Input, Button} from "@chakra-ui/react";

export default function StudentForm() {
  return (
    <Box bgRepeat="no-repeat" bgSize="cover" paddingTop="20px" px="31px">
      <Flex alignItems="center">
        <Box>
          <Image src="/images/LeftArrow.png" alt="img" boxSize="40px" />
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
        <VStack spacing={4} w="100%">
          <Flex
            flex="1"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            px="31px"
            mb="50px"
          >
            <Heading fontSize="26px" ml="495px" >
              Add Student
            </Heading>
            <Button
              h="36px"
              w="105px"
              ml="auto"
              bg="#AD0036"
              color="white"
              fontSize={12}
              fontWeight="semibold"
            >
              Add
            </Button>
          </Flex>
          <Flex  w="100%"   >
            <Box w="210px" h="210px" bgColor="black" borderRadius="10px" ml="159px" mt="65px"></Box>
            <Box w="400px" ml="155px"  >
              <FormControl mb="22px">
                <FormLabel fontWeight="semibold">Email address</FormLabel>
                <Input type="email" h="40px" border="1px" borderColor="black" borderRadius="none" />
              </FormControl>
              <FormControl mb="22px" >
                <FormLabel fontWeight="semibold">Date of birth</FormLabel>
                <Input type="dd-mm-yy" placeholder="dd-mm-yy" h="40px" border="1px" borderColor="black" borderRadius="none" />
              </FormControl>
              <FormControl mb="22px">
                <FormLabel fontWeight="semibold">Belt grade</FormLabel>
                <Input type="password" h="40px" border="1px" borderColor="black" borderRadius="none"  />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="semibold">Years of experience</FormLabel>
                <Input type="password" h="40px" border="1px" borderColor="black" borderRadius="none"  />
              </FormControl>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}

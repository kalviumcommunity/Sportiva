import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ToolBar from "../../components/StudentsListingPage/ToolBar";
import data from "../../components/StudentsListingPage/Data";

export default function StudentsListing() {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredData = data.filter((student) =>
      student.name.toLowerCase().includes(keyword)
    );
    setFilteredData(filteredData);
  };

  return (
    <>
      <ToolBar handleSearch={handleSearch} />
      <Flex pt="23px" alignItems="center" justifyContent="center">
        <Box
          display="grid"
          gridTemplateColumns="repeat(5, minmax(0, 1fr))"
          gap="35px"
        >
          {filteredData.map((student) => (
            <Box
              key={student.id}
              bg="white"
              border="1px"
              borderColor="#E3E3E3"
              w="240px"
              h="226px"
            >
              <Image
                src={student.image}
                alt={student.name}
                h="124px"
                w="205px"
                ml="18px"
                pt="15px"
              />
              <Text fontWeight="bold" ml="18px" pt="15px">
                {student.name}
              </Text>
              <Text pt="15px" ml="18px">
                {student.belt_grade}
              </Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </>
  );
}


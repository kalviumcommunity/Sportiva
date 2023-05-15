import { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ToolBar from "../../components/StudentsListingPage/ToolBar";

export default function StudentsCard() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("http://localhost:4006/api/Students");
      const data = await result.json();
      setFilteredData(data);
    }
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = filteredData.filter((student) =>
      student.name.toLowerCase().includes(keyword)
    );
  setSearchedData(filtered);
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
          {searchedData.length > 0 ? (
            searchedData.map((student) => (
              <Box
                key={student.id}
                bg="white"
                border="1px"
                borderColor="#C7C7C7"
                w="240px"
                h="226px"
                transition="all 0.1s ease-in-out"
                _hover={{
                  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
                  transform: "scale(1.12)",
                }}
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
            ))
          ) : (
            <></>
          )}
        </Box>
      </Flex>
    </>
  );
}

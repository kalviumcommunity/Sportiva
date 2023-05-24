import { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ToolBar from "../../components/StudentsListingPage/ToolBar";

export default function StudentsCard() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("http://localhost:4006/api/Students");
      const data = await result.json();
      setFilteredData(data);
      setSearchedData(data);
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
          gridTemplateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
            xl: "repeat(5, minmax(0, 1fr))",
          }}
          gap="35px"
        >
          {searchedData.length > 0 ? (
            searchedData.map((student) => (
              <Link key={student._id} to={`/students-analytics/${student._id}`}>
                <Box
                  bg="white"
                  border="1px"
                  borderColor="#C7C7C7"
                  w="240px"
                  h="226px"
                  transition="all 0.4s ease-in-out"
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
              </Link>
            ))
          ) : (
            <></>
          )}
        </Box>
      </Flex>
    </>
  );
}

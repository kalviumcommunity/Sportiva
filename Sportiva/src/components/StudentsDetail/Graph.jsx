import { Box, Text,Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,} from "recharts";

export default function LineGraph({
  data,
  title,
}) {
  const getParsedData = (_data) => {
    return _data.map((val, index) => ({
      Session: `Session ${index + 1}`,
      points: val,
    }));
  };

  return (
    <Box>
      <Box
        bg={"white"}
        width={"647px"}
        p="10px"
        border="2px solid"
        color="black"
      >
        <Flex justifyContent={"space-between"} fontWeight="bold">
          <Text pb="50px">{title}</Text>
          <Text>Latest: {data}</Text>
        </Flex>
        <LineChart
          width={532}
          height={250}
          data={getParsedData(data)}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="week" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="points" stroke="#8884d8" />
        </LineChart>

        {/* <Box mt={4} display="flex" alignItems="center">
          <Input
            type="number"
            placeholder="Enter points for next week"
            value={newPoints}
            onChange={handleChange}
            mr={2}
          />
          <Button colorScheme="blue" onClick={handleSubmit}>
            Add
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
}

LineGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string,
  newPoints: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

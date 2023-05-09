import { useState } from "react";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,} from "recharts";
import { Box, Input, Button } from "@chakra-ui/react";

const initialData = [0, 1, 4, 5, 8, 2];

export default function LineGraph() {
  const [data, setData] = useState(initialData);
  const [newPoints, setNewPoints] = useState("");

  const handleChange = (e) => {
    setNewPoints(e.target.value);
  };

  const handleSubmit = () => {
    const newData = [...data];
    newData.push({
      week: `Week ${data.length + 1}`,
      points: parseInt(newPoints),
    });
    setData(newData);
    setNewPoints("");
  };

  const getParsedData = (_data) => {
    return _data.map((val, index) => ({
      week: `Week ${index + 1}`,
      points: val,
    }));
  };

  return (
    <Box>
      <LineChart
        width={300}
        height={200}
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
      <Box mt={4}>
        <Input
          value={newPoints}
          onChange={handleChange}
          placeholder="Enter points for next week"
          h="40px"
          width="100px"
          border="1px"
          borderColor="black"
          borderRadius="none"
        />
        <Button onClick={handleSubmit} ml={4}>
          Week {data.length + 1}
        </Button>
      </Box>
    </Box>
  );
}

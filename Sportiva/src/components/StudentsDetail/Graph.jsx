import { useState } from "react";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,} from "recharts";
import { Box, Input ,Text} from "@chakra-ui/react";
import PropTypes from "prop-types";

// const initialData = [0, 1, 4, 5, 8, 2];

export default function LineGraph({data,title}) {
  // const [OldData, setData] = useState();
  const [newPoints, setNewPoints] = useState("");

  const handleChange = (e) => {
    setNewPoints(e.target.value);
  };

  // const handleSubmit = () => {
  //   const newData = [...data];
  //   newData.push({
  //     week: `Week ${OldData.length + 1}`,
  //     points: parseInt(newPoints),
  //   });
  //   setData(newData);
  //   setNewPoints("");
  // };

  const getParsedData = (_data) => {
    return _data.map((val, index) => ({
      week: `Week ${index + 1}`,
      points: val,
    }));
  };

  return (
    <Box>
      <Box bg={"white"} width={"647px"} p="10px" border="2px solid " color="black">
        <Text pb="50px" fontWeight="Bold">{title}</Text>
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
      </Box>

    </Box>
  );
}

LineGraph.propTypes = {
  data: PropTypes.func.isRequired,
  title : PropTypes.string
};

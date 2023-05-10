import { Box, Text, Flex } from "@chakra-ui/react";
import data from "../../components/StudentsListingPage/Data";
import LineGraph from "../../components/StudentsDetail/Graph";
import { useParams } from "react-router-dom";
import NavBar from "../../components/StudentsDetail/NavBar";

export default function StudentAnalytics() {
  const { id } = useParams();
  const student = data.find((e) => e.id === id);
  if (!student) {
    return <Box>Student not found.</Box>;
  }

  const parseStudentData = (coachNotes) => {
    const skills = {
      speed: [],
      footwork: [],
      stamina: [],
      agility: [],
      flexibility: [],
      reflex: [],
    };

    coachNotes.forEach((note) => {
      skills.speed.push(note.skills.speed);
      skills.footwork.push(note.skills.footwork);
      skills.stamina.push(note.skills.stamina);
      skills.agility.push(note.skills.agility);
      skills.flexibility.push(note.skills.flexibility);
      skills.reflex.push(note.skills.reflex);
    });

    return skills;
  };

  const parsedData = parseStudentData(student.coach_notes);

  return (
    <Box>
      <NavBar />
      <Text>Your Progress</Text>
      <Flex justifyContent="center" mt={4}>
        <Box display="flex" flexDirection="column">
          <Flex>
            <Box width="50%" pr={2} mb="41px" mr="41px">
              <LineGraph data={parsedData.speed} title="Speed" />
            </Box>
            <Box width="50%" pl={2} mb="41px" mr="41px">
              <LineGraph data={parsedData.footwork} title="Footwork" />
            </Box>
          </Flex>
          <Flex>
            <Box width="50%" pr={2} mb="41px" mr="41px">
              <LineGraph data={parsedData.stamina} title="Stamina" />
            </Box>
            <Box width="50%" pl={2} mb="41px" mr="41px">
              <LineGraph data={parsedData.agility} title="Agility" />
            </Box>
          </Flex>
          <Flex>
            <Box width="50%" pr={2} mb="41px" mr="41px">
              <LineGraph data={parsedData.flexibility} title="Flexibility" />
            </Box>
            <Box width="50%" pl={2} mb="41px" mr="41px">
              <LineGraph data={parsedData.reflex} title="Reflex" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

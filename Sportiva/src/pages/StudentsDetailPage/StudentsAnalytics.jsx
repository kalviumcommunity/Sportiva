import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../../components/StudentsDetail/NavBar";
import LineGraph from "../../components/StudentsDetail/Graph";

export default function StudentAnalytics() {
  const { id:_id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function fetchStudentData() {
      try {
        const result = await fetch(
          `https://sportiva-backend.onrender.com/api/Students/${_id}`
        );
        const data = await result.json();
        setStudent(data);
      } catch (error) {
        console.log("Error fetching student data:", error);
      }
    }
    fetchStudentData();
  }, [_id]);
  if (!student) {
    return <div>Student not found</div>;
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

    if (coachNotes && coachNotes.length > 0) {
      skills.speed = coachNotes.map((note) => note.skills.speed);
      skills.footwork = coachNotes.map((note) => note.skills.footwork);
      skills.stamina = coachNotes.map((note) => note.skills.stamina);
      skills.agility = coachNotes.map((note) => note.skills.agility);
      skills.flexibility = coachNotes.map((note) => note.skills.flexibility);
      skills.reflex = coachNotes.map((note) => note.skills.reflex);
    }

    return skills;
  };

  const parsedData = parseStudentData(student.coach_notes);

  return (
    <Box>
      <NavBar newSessionCount={student.coach_notes?.length || 1} />
      <Flex>
        <Flex pt="136px" pl="200px">
          <Image
            src={student.image}
            alt={student.name}
            w="150px"
            h="150px"
            borderRadius={"10px"}
          />
          <Box dir="column" pl="50px">
            <Text fontWeight={"bold"}>{student.name}</Text>
            <Text>{student.belt_grade}</Text>
            <Text>Years of Experience: {student.years_of_exp}</Text>
          </Box>
        </Flex>
        <Flex flexDirection={"column"} mt="94px" ml="240px">
          <Flex
            alignItems={"center"}
            fontWeight={"black"}
            fontSize={"21px"}
            mb={"12px"}
            justifyContent={"space-between"}
          >
            <Text>Coach Notes</Text>
            <Text>
              {student.coach_notes?.length
                ? student.coach_notes[student.coach_notes.length - 1].session
                : ""}
            </Text>
          </Flex>
          <Box
            width={"680px"}
            h={"160px"}
            bg="white"
            border="1px solid gray"
            borderOpacity="0.2"
          >
            <Text pl="10px" pt="10px">
              {student.coach_notes?.length
                ? student.coach_notes[student.coach_notes.length - 1].note
                : ""}
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Text pl="145px" pt="130px" fontWeight={"bold"}>
        Your Progress
      </Text>
      <Flex justifyContent="center" mt={4}>
        <Box display="flex" flexDirection="column">
          <Flex>
            <Box width="50%" pr={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.speed}
                latestData={parsedData.speed[parsedData.speed.length - 1]}
                title="Speed"
                session={parsedData.session}
              />
            </Box>
            <Box width="50%" pl={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.footwork}
                latestData={parsedData.speed[parsedData.speed.length - 1]}
                title="Footwork"
                session={parsedData.session}
              />
            </Box>
          </Flex>
          <Flex>
            <Box width="50%" pr={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.stamina}
                latestData={parsedData.stamina[parsedData.stamina.length - 1]}
                title="Stamina"
                session={parsedData.session}
              />
            </Box>
            <Box width="50%" pl={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.agility}
                latestData={parsedData.agility[parsedData.agility.length - 1]}
                title="Agility"
                session={parsedData.session}
              />
            </Box>
          </Flex>
          <Flex>
            <Box width="50%" pr={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.flexibility}
                latestData={parsedData.flexibility[parsedData.flexibility.length - 1]}
                title="Flexibility"
                session={parsedData.session}
              />
            </Box>
            <Box width="50%" pl={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.reflex}
                latestData={parsedData.reflex[parsedData.reflex.length - 1]}
                title="Reflex"
                session={parsedData.session}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

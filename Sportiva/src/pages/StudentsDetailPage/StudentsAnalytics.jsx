import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StudentAnalytics() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

 useEffect(() => {
   async function fetchStudentData() {
     try {
       const result = await fetch(`http://localhost:4006/api/Students/${id}`);
       const data = await result.json();
       setStudent(data);
     } catch (error) {
       console.log("Error fetching student data:", error);
     }
   }
   fetchStudentData();
 }, [id]);

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
      <NavBar newSessionCount={student.coach_notes.length} />
      <Flex>
        <Flex pt="136px" pl="200px">
          <Image
            src={student.image}
            alt={student.name}
            w="150px"
            h="150px"
            borderRadius={"10px"}
          />
          <Box dir="coloumn" pl="50px">
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
              {student.coach_notes[student.coach_notes.length - 1].date}
            </Text>
          </Flex>
          <Box
            width={"680px"}
            h={"160px"}
            bg="white"
            border="1px solid gray"
            borderopacity="0.2"
          >
            <Text pl="10px" pt="10px">
              {student.coach_notes[student.coach_notes.length - 1].note}
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
                title="Speed"
                date={parsedData.date}
              />
            </Box>
            <Box width="50%" pl={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.footwork}
                title="Footwork"
                date={parsedData.date}
              />
            </Box>
          </Flex>
          <Flex>
            <Box width="50%" pr={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.stamina}
                title="Stamina"
                date={parsedData.date}
              />
            </Box>
            <Box width="50%" pl={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.agility}
                title="Agility"
                date={parsedData.date}
              />
            </Box>
          </Flex>
          <Flex>
            <Box width="50%" pr={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.flexibility}
                title="Flexibility"
                date={parsedData.date}
              />
            </Box>
            <Box width="50%" pl={2} mb="41px" mr="41px">
              <LineGraph
                data={parsedData.reflex}
                title="Reflex"
                date={parsedData.date}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

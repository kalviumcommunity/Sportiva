import { Box } from "@chakra-ui/react";
import data from "../../components/StudentsListingPage/Data";
import LineGraph from "../../components/StudentsDetail/Graph";
import { useParams } from "react-router-dom";

export default function StudentAnalytics() {
  const { id } = useParams();
  const student = data.find((e) => e.id === id);
  if (!student) {
    return <Box>Student not found.</Box>;
  }
  // console.log(student.coach_notes);

  const parseStudentData = (coachNotes) => {
    const skills = {
      speed: [],
      footwork: [],
      stamina: [],
      agility: [],
      flexibility: [],
      reflex: [],
    };

    coachNotes.forEach(note => {
      skills.speed.push(note.skills.speed)
      skills.footwork.push(note.skills.footwork)
      skills.stamina.push(note.skills.stamina)
      skills.agility.push(note.skills.agility)
      skills.flexibility.push(note.skills.flexibility)
      skills.reflex.push(note.skills.reflex)
    })

    return skills
  }

  const parsedData = parseStudentData(student.coach_notes)
  console.log(parsedData.speed)
  // console.log(parseStudentData(student.coach_notes))
  return(
    <Box>
       <LineGraph data={parsedData.speed} />
      
    </Box>
  )
}

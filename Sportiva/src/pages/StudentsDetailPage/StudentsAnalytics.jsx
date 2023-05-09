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
  console.log(student.coach_notes);

  const parseStudentData = (coachNotes) => {
    const skills = {
      speed: [],
      footwork: [],
      stamina: [],
      agility: [],
      flexibility: [],
      reflex: [],
    };

    

    return skills
  }

  console.log(parseStudentData(student.coach_notes))
  // return <LineGraph skills={skills} />;
}

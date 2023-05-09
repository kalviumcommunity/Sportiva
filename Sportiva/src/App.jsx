import "./App.css";
import StudentsCard from "./pages/StudentsListing/StudentsCard";
import { ChakraProvider,Image } from "@chakra-ui/react";
import "./index.css";
import theme from "./chakraTheme.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/HomePage";
import StudentForm from "./pages/AddStudentForm/StudentForm";
// import LineGraph from "./components/StudentsDetail/Graph";
import StudentAnalytics from "./pages/StudentsDetailPage/StudentsAnalytics";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Image src ="/images/Background-img.jpg" position="fixed" zIndex = "-1" h="100vh" />
      <Router>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/students-listing" element={<StudentsCard />} />
        <Route path="/student-form" element={<StudentForm/>}/>
        <Route path="/students-analytics/:id" element={<StudentAnalytics />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

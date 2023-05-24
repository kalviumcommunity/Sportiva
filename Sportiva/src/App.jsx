import "./App.css";
import StudentsCard from "./pages/StudentsListing/StudentsCard";
import { ChakraProvider,Image } from "@chakra-ui/react";
import "./index.css";
import theme from "./chakraTheme.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/HomePage";
import StudentForm from "./pages/AddStudentForm/StudentForm";
import StudentAnalytics from "./pages/StudentsDetailPage/StudentsAnalytics";
import NavBar from "./components/StudentsDetail/NavBar";
import Auth0Provider from "./auth0/auth0-provider-with-history";


function App() {

  return (
    <ChakraProvider theme={theme}>
      <Image
        src="/images/BackgroundImg.jpg"
        position="fixed"
        zIndex="-1"
        h="100vh"
      />
      <Router>
        <Auth0Provider>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/students-listing" element={<StudentsCard />} />
            <Route path="/student-form" element={<StudentForm />} />
            <Route
              path="/students-analytics/:id"
              element={<StudentAnalytics />}
            />
            <Route path="/nav-bar" element={<NavBar />} />
          </Routes>
        </Auth0Provider>
      </Router>
    </ChakraProvider>
  );
}

export default App;

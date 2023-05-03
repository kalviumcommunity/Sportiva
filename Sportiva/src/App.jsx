import "./App.css";
// import StudentsCard from "./pages/StudentsListing/StudentsCard";
import { ChakraProvider } from "@chakra-ui/react";
import StudentForm from "./pages/AddStudentForm/StudentForm";

import "./index.css";
import theme from "./chakraTheme.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage/HomePage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Router>
        <Routes>
          <Route exact path="/" component={Homepage} />
          <Route path="/StudentsListing" component={StudentsCard} />
        </Routes>
      </Router> */}
      <StudentForm/>
    </ChakraProvider>
  );
}

export default App;

import "./App.css";
import StudentsCard from "./pages/StudentsListing/StudentsCard";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import theme from "./chakraTheme.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage/HomePage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Router>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/studentsListingPage" element={<StudentsCard />} />
        </Routes>
      </Router> */}
      <StudentsCard/>
    </ChakraProvider>
  );
}

export default App;

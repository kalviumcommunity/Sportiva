import "./App.css";
import StudentsCard from "./components/StudentsListingPage/StudentsCard";
import { ChakraProvider } from "@chakra-ui/react";
// import NavBar from "./components/StudentsListingPage/NavBar";
// import Homepage from "./pages/Homepage/HomePage";
// import ToolBar from "./components/StudentsListingPage/ToolBar";
import "./index.css";
import theme from "./chakraTheme.jsx";

function App() {
  return (
    <ChakraProvider theme={theme}>

      <StudentsCard />

      {/* <Homepage />  */}

      {/* <NavBar/> */}

      {/* <ToolBar/> */}
      
    </ChakraProvider>
  );
}

export default App;

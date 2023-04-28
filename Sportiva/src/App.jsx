import "./App.css";
import StudentsCard from "./components/StudentsListingPage/StudentsCard";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import theme from "./chakraTheme.jsx";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <StudentsCard />
    </ChakraProvider>
  );
}

export default App;

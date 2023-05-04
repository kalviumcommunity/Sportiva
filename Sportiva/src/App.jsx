import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import StudentForm from "./pages/AddStudentForm/StudentForm";
import "./index.css";
import theme from "./chakraTheme.jsx";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <StudentForm/>
    </ChakraProvider>
  );
}

export default App;

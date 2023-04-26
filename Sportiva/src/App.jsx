import "./App.css";
import StudentsCard from "./components/StudentsListingPage/StudentsCard";
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
// import Welcome from "./components/HomePage";
import './font.css';
import theme from './chakraTheme.jsx'

function App() {
  return (
    <ChakraProvider theme={theme}>
       <CSSReset>
       <StudentsCard/>
       </CSSReset>
      {/* <Welcome /> */}
      
      </ChakraProvider>
  );
}

export default App;

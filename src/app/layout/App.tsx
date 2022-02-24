import { Route } from "react-router-dom";
import Courses from "../../features/courses/Courses";
import HomePage from "../../features/home/HomePage";
import JobPage from "../../features/Job/JobPage";
import GlobalStyle from "./globalStyles";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Route exact path='/' component={HomePage} />
      <Route path='/courses' component={Courses} />
      <Route path='/jobs' component={JobPage} />
    </>
  );
}

export default App;

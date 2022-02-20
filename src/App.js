import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Map from "./components/Map";
import NotFound from "./components/NotFound";
import TopNav from "./components/TopNav";
import AddProject from "./components/AddProject";
import AreaProjects from "./components/AreaProjects";
import Project from "./components/Project";
import projects from "./data/data";

const App = () => {
  // localStorage.setItem("ekdda-data", JSON.stringify(projects));
  console.log(JSON.parse(localStorage.getItem("ekdda-data")));
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main projects={projects} />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/area-projects/:city" element={<AreaProjects />} />
        <Route path="/project/:projectID" element={<Project />} />
        <Route path="/map" element={<Map />} /> {/* testing only!!!! */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

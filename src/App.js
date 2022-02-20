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

const projects = [
  {
    projectID: 1,
    title: "ldifhwoeifnwefnqfnwe",
    description:
      "loremljsdnfoienfowenf ekjfdneoifnoew fwefoewf efowe flenfjwore loremljsdnfoienfowenf ekjfdneoifnoew fwefoewf efowe flenfjwore loremljsdnfoienfowenf ekjfdneoifnoew fwefoewf efowe flenfjwore loremljsdnfoienfowenf ekjfdneoifnoew fwefoewf efowe flenfjwore loremljsdnfoienfowenf ekjfdneoifnoew fwefoewf efowe flenfjwore ",
    startDate: "02/02/2021",
    endDate: "30/9/2022",
    receiver: "Δημος Αθηναιων",
    builder: "Συνεργειο του Δημου",
    budget: 20000,
  },
  {
    projectID: 2,
  },
  {
    projectID: 3,
  },
  {
    projectID: 4,
  },
];

const App = () => {
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

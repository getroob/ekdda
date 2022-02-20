import { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import useWindowSize from "../tools/dimentions";
import Map from "./Map";
import SingleProject from "./SingleProject";

const Main = () => {
  const { width, height } = useWindowSize();
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("ekdda-data")));

  return (
    <Container fluid style={{ minHeight: height - 56, overflow: "hidden" }}>
      <Row style={{ minHeight: 'inherit'}}>
        <Col className="px-0" xs={12} md={8}>
          <Map setSelectedList={setProjects}/>
        </Col>
        <Col
          className="px-0"
          xs={12}
          md={4}
          style={{ maxHeight: height - 56, overflowY: "scroll" }}
        >
          <SingleProject key={"add"} add={true} />
          {projects.length > 0 ? projects.map((project, index) => (
            <SingleProject key={index} project={project} />
          )): <Card.Body>
          <Card.Text>Δεν υπάρχουν έργα στην περιοχή</Card.Text>
        </Card.Body>}
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

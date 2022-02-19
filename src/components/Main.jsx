import { Col, Container, Row } from "react-bootstrap";
import useWindowSize from "../tools/dimentions";
import Map from "./Map";
import SingleProject from "./SingleProject";

const Main = ({ projects }) => {
  const { width, height } = useWindowSize();

  return (
    <Container className="my-5">
      {console.log(width, height)}
      <Row>
        <Col xs={12} md={8}>
          <Map />
        </Col>
        <Col xs={12} md={4}>
          <SingleProject key={"add"} add={true} />
          {projects.map((project, index) => (
            <SingleProject key={index} project={{ projectID: project }} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

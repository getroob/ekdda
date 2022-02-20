import { Col, Container, Row } from "react-bootstrap";
import useWindowSize from "../tools/dimentions";
import Map from "./Map";
import SingleProject from "./SingleProject";

const Main = ({ projects }) => {
  const { width, height } = useWindowSize();

  return (
    <Container fluid style={{ maxHeight: height - 56, overflow: "hidden" }}>
      <Row>
        <Col className="px-0" xs={12} md={8}>
          <Map />
        </Col>
        <Col
          className="px-0"
          xs={12}
          md={4}
          style={{ maxHeight: height - 56, overflowY: "scroll" }}
        >
          <SingleProject key={"add"} add={true} />
          {projects.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

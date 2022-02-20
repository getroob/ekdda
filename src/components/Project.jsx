import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  FormControl,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Map from "./Map";
import { useEffect, useState } from "react";

const Project = () => {
  const { projectID } = useParams();
  const [project, setProject] = useState({});
  const [comment, setComment] = useState("");

  const postComment = (event) => {
    event.preventDefault();
    setProject({
      ...project,
      progress: [
        ...project.progress,
        { author: "Τεχνικος 2", date: "20/02/2022", text: comment },
      ],
    });
    setComment("");
  };

  useEffect(() => {
    let projects = JSON.parse(localStorage.getItem("ekdda-data"));
    setProject(projects.find((p) => p.projectID == projectID));
  }, [projectID]);

  return (
    <Container fluid className="p-5">
      {Object.keys(project).length > 0 ? (
        <>
          <Row>
            <Card className="px-0">
              <Card.Header>{project.title}</Card.Header>
              <Card.Body>
                <Card.Title>
                  {project.builder} - {project.receiver}
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Row>
          <Row className="my-5">
            <Map />
          </Row>
          <Row>
            <ListGroup className="p-0">
              <ListGroup.Item active>Προοδος Εργου</ListGroup.Item>
              {project.progress.map((progr, index) => (
                <ListGroup.Item key={index}>
                  {progr.author} - {progr.date} - {progr.text}
                </ListGroup.Item>
              ))}
              <div className="d-flex mt-2">
                <FormControl
                  type="search"
                  placeholder="Νεο Σχολιο..."
                  className="me-2"
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                />
                <Button
                  variant="outline-success"
                  type="button"
                  onClick={postComment}
                >
                  Αποστολη
                </Button>
              </div>
            </ListGroup>
          </Row>
        </>
      ) : (
        <Alert variant="warning">Not Fount</Alert>
      )}
    </Container>
  );
};

export default Project;

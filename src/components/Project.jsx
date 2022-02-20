import {
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

const Project = () => {
  const { projectID } = useParams();
  console.log(projectID);
  return (
    <Container fluid className="p-5">
      <Row>
        <Card className="px-0">
          <Card.Header>Τιτλος Εργου</Card.Header>
          <Card.Body>
            <Card.Title>Αποδεκτης - Αναδοχος</Card.Title>
            <Card.Text>
              Περιγραφη Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Possimus error modi reiciendis recusandae dolore facere
              aperiam qui distinctio numquam eaque, reprehenderit,
              necessitatibus natus non odit consequatur velit voluptates
              doloribus culpa?
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Row>
      <Row className="my-5">
        <Map />
      </Row>
      <Row>
        <ListGroup>
          <ListGroup.Item active>Προοδος Εργου</ListGroup.Item>
          <ListGroup.Item>
            Τεχνικος 1 - 20 Φεβ 2022 - Morbi leo risus
          </ListGroup.Item>
          <ListGroup.Item>
            Τεχνικος 1 - 20 Φεβ 2022 - Morbi leo risus
          </ListGroup.Item>
          <ListGroup.Item>
            Τεχνικος 1 - 20 Φεβ 2022 - Morbi leo risus
          </ListGroup.Item>
          <ListGroup.Item>
            Τεχνικος 1 - 20 Φεβ 2022 - Morbi leo risus
          </ListGroup.Item>
          <Form className="d-flex mt-2">
            <FormControl
              type="search"
              placeholder="Νεο Σχολιο..."
              className="me-2"
            />
            <Button variant="outline-success">Αποστολη</Button>
          </Form>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Project;

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const AddProject = () => {
  return (
    <Container className="my-5">
      <Form>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Τιτλος Εργου</Form.Label>
              <Form.Control type="text" placeholder="Τιτλος..." />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Αναδοχος Εργου</Form.Label>
              <Form.Control type="text" placeholder="Αναδοχος..." />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Προϋπολογισμος</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>€</InputGroup.Text>
                <FormControl type="number" placeholder="20000" />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Αποδεκτης</Form.Label>
              <Form.Select>
                <option>Επιλεξτε</option>
                <option value="1">Δημος Αθηναιων</option>
                <option value="2">Δημος Θεσσαλονικης</option>
                <option value="3">Περιφερεια Στερεας Ελλαδας</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Εναρξη Εργου</Form.Label>
              <Form.Control type="date" placeholder="Εναρξη..." />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Ληξη Εργου</Form.Label>
              <Form.Control type="date" placeholder="Ληξη..." />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Περιγραφη Εργου</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Περιγραφη..." />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Link to="/" className="d-flex justify-content-center mt-5">
            <Button className="w-50" variant="success" type="button">
              Υποβολη
            </Button>
          </Link>
        </Row>
      </Form>
    </Container>
  );
};

export default AddProject;

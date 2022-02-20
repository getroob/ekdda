import { useEffect, useState } from "react";
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
  const [details, setDetails] = useState({
    title: "",
    description: "",
    costructor: "",
    budget: "",
    municipality: 1,
    startDate: "",
    endDate: "",
    latlng: { lat: 23.88, lng: 38 },
    progress: [],
  });

  const saveDetails = () => {
    let ekddaData = JSON.parse(localStorage.getItem("ekdda-data"));
    ekddaData.unshift(details);
    ekddaData.map((e, i) => (e.projectID = i + 1));
    console.log(ekddaData);
    localStorage.setItem("ekdda-data", JSON.stringify(ekddaData));
  };

  return (
    <Container className="my-5">
      <Form>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Τιτλος Εργου</Form.Label>
              <Form.Control
                type="text"
                placeholder="Τιτλος..."
                value={details.title}
                onChange={(e) =>
                  setDetails({ ...details, title: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Αναδοχος Εργου</Form.Label>
              <Form.Control
                type="text"
                placeholder="Αναδοχος..."
                value={details.costructor}
                onChange={(e) =>
                  setDetails({ ...details, costructor: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Προϋπολογισμος</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>€</InputGroup.Text>
                <FormControl
                  type="number"
                  placeholder="20000"
                  value={details.budget}
                  onChange={(e) =>
                    setDetails({ ...details, budget: e.target.value })
                  }
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Αποδεκτης</Form.Label>
              <Form.Select
                value={details.municipality}
                onChange={(e) =>
                  setDetails({ ...details, municipality: e.target.value })
                }
              >
                <option>Επιλεξτε</option>
                <option value="Δημος Αθηναιων">Δημος Αθηναιων</option>
                <option value="Δημος Θεσσαλονικης">Δημος Θεσσαλονικης</option>
                <option value="Περιφερεια Στερεας Ελλαδας">
                  Περιφερεια Στερεας Ελλαδας
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Εναρξη Εργου</Form.Label>
              <Form.Control
                type="date"
                placeholder="Εναρξη..."
                value={details.startDate}
                onChange={(e) =>
                  setDetails({ ...details, startDate: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Ληξη Εργου</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ληξη..."
                value={details.endDate}
                onChange={(e) =>
                  setDetails({ ...details, endDate: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Περιγραφη Εργου</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Περιγραφη..."
                value={details.description}
                onChange={(e) =>
                  setDetails({ ...details, description: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Link
            to="/"
            className="d-flex justify-content-center mt-5"
            style={{ textDecoration: "none" }}
          >
            <Button
              className="me-1 w-50"
              variant="outline-danger"
              type="button"
            >
              Ακυρωση
            </Button>
            <Button
              className="ms-1 w-50"
              variant="success"
              type="button"
              onClick={saveDetails}
            >
              Υποβολη
            </Button>
          </Link>
        </Row>
      </Form>
    </Container>
  );
};

export default AddProject;

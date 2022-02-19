import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleProject = ({ add = false, project }) => {
  return (
    <Card className="mb-2">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{add ? "Προσθεστε εργο" : "Τιτλος εργου"}</Card.Title>
        {!add && (
          <Card.Text>
            Περιγραφη... Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Magnam qui consequuntur nemo officia saepe nostrum neque vero
            pariatur voluptatibus amet! Quo animi sapiente ad ea laborum magnam
            ab necessitatibus voluptate.
          </Card.Text>
        )}
        <Link to={add ? "add-project" : `/project/${project.projectID}`}>
          <Button variant={add ? "success" : "primary"}>
            {add ? "Προσθηκη" : "Λεπτομεριες"}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleProject;

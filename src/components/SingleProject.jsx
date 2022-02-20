import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleProject = ({ add = false, project }) => {
  return (
    <Card className="m-2">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{add ? "Προσθεστε εργο" : project.title}</Card.Title>
        {!add && <Card.Text>{project.description}</Card.Text>}
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

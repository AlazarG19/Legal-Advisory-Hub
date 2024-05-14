import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "react-bootstrap";

const BackButton = ({ destination = "/documents" }) => {
  return (
    <div className="d-flex">
      <Link to={destination}>
        <Button variant="primary" className="px-4 py-1 rounded-lg">
          <BsArrowLeft className="text-2xl" />
        </Button>
      </Link>
    </div>
  );
};

export default BackButton;

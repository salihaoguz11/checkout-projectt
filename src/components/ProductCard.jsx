import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductCard = (props) => {
  const { image, id, name, price } = props;

  return (
    <Card
      className="d-flex row mb-3 justify-content-center align-items-center"
      style={{ width: "30rem" }}
    >
      <Row>
        <Col>
          <Card.Img style={{ width: "90%" }} variant="top" src={image} />
        </Col>

        <Col>
          <Card.Body className="align-items-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex align-items-center justify-content-between">
              <Button variant="primary" className="px-3">
                +
              </Button>
              <h3>1</h3>
              <Button className="px-3" variant="primary">
                -
              </Button>
            </div>

            <div className=" d-flex  mt-3 justify-content-center ">
              <Button style={{ width: "100%" }} variant="danger">
                Remove
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;

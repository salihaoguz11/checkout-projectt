import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const ProductCard = (props) => {
  const { image, id, name, price, dampingRate } = props;
  const [text, setText] = useState(1);

  const [count, setCount] = useState(1);
  const increase = (id) => {
    setCount(count + 1);
    setText(count);
  };
  const decrease = (id) => {
    setCount(count - 1);
    setText(count - 1);
  };

  return (
    <Card
      className="d-flex row mb-3 justify-content-center align-items-center"
      style={{ width: "32rem" }}
    >
      <Row>
        <Col>
          <Card.Img style={{ width: "90%" }} variant="top" src={image} />
        </Col>

        <Col>
          <Card.Body className="align-items-center ">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="d-flex align-items-center">
              <h2>${price} </h2>
              <small className="mx-3">
                <del>${(price / dampingRate).toFixed(2)}</del>{" "}
              </small>
            </Card.Text>
            <div className="d-flex align-items-center justify-content-between">
              <Button
                variant="primary"
                onClick={() => decrease(id)}
                className="px-3"
              >
                -
              </Button>
              <h3>{text}</h3>
              <Button
                onClick={() => increase(id)}
                className="px-3"
                variant="primary"
              >
                +
              </Button>
            </div>

            <div className=" d-flex  mt-3 justify-content-center ">
              <Button
                style={{ width: "100%" }}
                // onClick={() => deleteProduct(id)}
                variant="danger"
              >
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

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddProduct = ({ addProductForm, hideProductForm }) => {
  return (
    <div className="mt-5 mx-5" style={{ width: "20rem" }}>
      <Form>
        <Button onClick={hideProductForm} variant="warning mb-3 mt-5" active>
          Primary button
        </Button>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="email" placeholder="Enter product name" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="product">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="text" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control type="text" placeholder="Quantity" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="text" placeholder="Image URL" />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Add to Card
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;

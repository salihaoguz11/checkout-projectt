import Button from "react-bootstrap/Button";

const ShowButton = ({ hideShowFunc, ShowAddProduct }) => {
  return (
    <div className="d-flex justify-content-center">
      <Button onClick={hideShowFunc}>
        {ShowAddProduct ? "Hide Add Product" : "Show Add Product"}
      </Button>
    </div>
  );
};

export default ShowButton;

import { useState } from "react";
import Button from "react-bootstrap/Button";

const ShowButton = ({ hideShowFunc }) => {
  return (
    <div className="d-flex justify-content-center">
      <Button>Show / Hide</Button>
    </div>
  );
};

export default ShowButton;

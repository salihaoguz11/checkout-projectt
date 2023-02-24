import { useState } from "react";
import AddProduct from "../components/AddProduct";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";
import ShowButton from "../ShowButton";

const Main = () => {
  const [ShowAddProduct, setShowAddProduct] = useState(false);
  const hideShowFunc = () => {
    return setShowAddProduct(!ShowAddProduct);
  };
  return (
    <div>
      <Header />
      <ShowButton hideShowFunc={hideShowFunc} showAddProduct={ShowAddProduct} />

      {ShowAddProduct ? (
        <div className="d-flex justify-content-center ">
          {" "}
          <AddProduct /> <CardTotal />{" "}
        </div>
      ) : (
        <CardTotal />
      )}
    </div>
  );
};

export default Main;

import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import AddProduct from "../components/AddProduct";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";
import ShowButton from "../ShowButton";
import axios from "axios";
import { useEffect } from "react";

const Main = () => {
  const [ShowAddProduct, setShowAddProduct] = useState(false);
  const [newData, setNewData] = useState([]);
  const hideShowFunc = () => {
    return setShowAddProduct(!ShowAddProduct);
  };
  const [addProductForm, setAddProductForm] = useState(false);
  const hideProductForm = () => {
    return setAddProductForm(!addProductForm);
  };
  const url = "https://63fb6f9b4e024687bf787e99.mockapi.io/api/checkout";
  const getProductsFromApi = async () => {
    const { data } = await axios(url);
    console.log(newData);
    setNewData(data);
  };
  useEffect(() => {
    getProductsFromApi();
  }, []);

  return (
    <div>
      <Header />
      <ShowButton hideShowFunc={hideShowFunc} showAddProduct={ShowAddProduct} />

      {ShowAddProduct && addProductForm ? (
        <CardTotal />
      ) : (
        <div className="d-flex justify-content-center ">
          <AddProduct
            addProductForm={addProductForm}
            hideProductForm={hideProductForm}
            getProductsFromApi={getProductsFromApi}
          />
          <CardTotal />
        </div>
      )}
    </div>
  );
};

export default Main;

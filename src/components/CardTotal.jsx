import ProductCard from "./ProductCard";
import data from "../helper/data";

const CardTotal = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row">
        <div>
          <h2>Card Total</h2>
        </div>

        <div>
          {data.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CardTotal;

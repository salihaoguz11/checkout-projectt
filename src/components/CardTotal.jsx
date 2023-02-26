import ProductCard from "./ProductCard";
import data from "../helper/data";
import Table from "react-bootstrap/Table";

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

          <Table responsive="sm">
            <tbody>
              <tr>
                <td colSpan={2}>Subtotal</td>
                <td></td>
                <td></td>
                <td></td>

                <td>Table cell</td>
              </tr>
              <tr>
                <td colSpan={2}>Tax</td>
                <td></td>
                <td></td>
                <td></td>

                <td>Table cell</td>
              </tr>
              <tr>
                <td colSpan={2}>Shipping</td>
                <td></td>
                <td></td>
                <td></td>

                <td>Table cell</td>
              </tr>
              <tr>
                <td colSpan={2}>Total</td>
                <td></td>
                <td></td>
                <td></td>

                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CardTotal;

import data from "../app/data/shoes.json";
import Product from "./Product";

const ProductList = ({ addProducttocart, cartId }) => {
  const shoes = data.shoes;
  // console.log({ shoes });
  return (
    <>
      <div className="shop-items">
        {shoes &&
          shoes.map((shoe, index) => (
            <>
              <Product
                shoe={shoe}
                addProducttocart={addProducttocart}
                cartId={cartId}
              />
            </>
          ))}
      </div>
    </>
  );
};

export default ProductList;

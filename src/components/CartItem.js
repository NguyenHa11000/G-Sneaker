import "./CartItem.css";
import trash from "../app/assets/trash.png";

const CartItem = (prop) => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-left">
          <div
            className="cart-item-image"
            style={{ backgroundColor: `${prop.shoe.color}` }}
          >
            <div className="cart-item-image-block">
              <img src={prop.shoe.image}></img>
            </div>
          </div>
        </div>
        <div className="cart-item-right">
          <div className="cart-item-name">{prop.shoe.name}</div>
          <div className="cart-item-price">{prop.shoe.price}</div>
          <div className="cart-item-actions">
            <div className="cart-item-count">
              <div
                className="cart-item-count-button"
                onClick={(e) => prop.minusAmount(prop.shoe.id)}
              >
                -
              </div>
              <div className="cart-item-count-number">
                {prop.cartItem.amount}
              </div>
              <div
                className="cart-item-count-button"
                onClick={(e) => prop.plusAmount(prop.shoe.id)}
              >
                +
              </div>
            </div>
            <div className="cart-item-remove">
              <img src={trash} class="cart-item-remove-icon"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

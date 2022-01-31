import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
    const [{ basket }]= useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </h3>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparation={true}
        prefix={"$"}
      />   {/*history.push is like (link to) to redirect you to some other page */}
      <button onClick={e => history.push('/payment')}>Proceed to Payment</button>
    </div>
  );
}

export default Subtotal;

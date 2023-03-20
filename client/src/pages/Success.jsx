import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userid: currentUser.id,
          total: cart.total,
        });
      } catch {}
    };
    data && createOrder();
    dispatch(clearCart());
  }, [cart, data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {`Thank you! Order is being prepared... Order total ${cart.total} €`}
      <Link to="/"><button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link>
    </div>
  );
};

export default Success;
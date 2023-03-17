import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  // const cart = location.state.cart;
  const cart = useSelector((state) => state.cart);
  console.log(data);
  // const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          // userid: currentUser._id,
          userid: 2,
          total: cart.total,
        });
        console.log(res);
      } catch {}
    };
    data && createOrder();
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
      {`Thank you! Your order is being prepared... Order total ${cart.total} €`}
      <Link to="/"><button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link>
    </div>
  );
};

export default Success;
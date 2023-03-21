
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import Product from './pages/Product.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Dashboard from './pages/dashboard.jsx';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Success from './pages/Success.jsx';
import { useEffect } from 'react';
import { calculateTotals } from './redux/slices/cartSlice.js';


const RestrictedRoutes = () => {
  const user = useSelector((state) => state.user.currentUser);
  return <> {!user ? <Outlet /> : <Navigate to="/" />} </>
};

const PrivateRoutes = () => {
  const user = useSelector((state) => state.user.currentUser);
  return <> {user ? <Outlet /> : <Navigate to="/" />} </>
};

const App = () => {

  const { products } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [products]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route element={<RestrictedRoutes />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
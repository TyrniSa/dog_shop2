// import {
//   BrowserRouter,
//   Navigate,
//   Routes,
//   Route,
//   Outlet,
// } from 'react-router-dom';
// import Home from './pages/home';
// import Dashboard from './pages/dashboard';
// import { useSelector } from 'react-redux';
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import Product from './pages/Product.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';

// const PrivateRoutes = () => {
//   const {isAuth} = useSelector(state => state.auth);
//   return <> {isAuth ? <Outlet /> : <Navigate to="/login" />} </>
// };

// const RestrictedRoutes = () => {
//   const {isAuth} = useSelector(state => state.auth);
//   return <> {!isAuth ? <Outlet /> : <Navigate to="/dashboard" />} </>
// };

const App = () => {
  return <Home />;
};


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />

//         <Route element={<PrivateRoutes />}>
//           <Route path='/dashboard' element={<Dashboard />} />
//         </Route>

//         <Route element={<RestrictedRoutes />}>
//           <Route path='/register' element={<Register />} />
//           <Route path='/login' element={<Login />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   )
// };

export default App;
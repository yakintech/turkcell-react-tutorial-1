import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Suppliers from "./pages/Suppliers";
import SupplierDetail from "./pages/SupplierDetail";
import StateArraySample from "./stateSample/StateArraySample";
import Customers from "./pages/Customers";
import CustomerDetail from "./pages/CustomerDetail";
import AddCustomer from "./pages/AddCustomer";
import CustomerUpdate from "./pages/CustomerUpdate";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./tanstack-query-sample/Categories";
import AddCategory from "./tanstack-query-sample/AddCategory";
import Orders from "./swr/Orders";

function App() {


  return <>
    <ul style={{ display: "flex", justifyContent: "space-between" }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/suppliers">Suppliers</Link></li>
      <li><Link to="/statearraysample">State Array</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/customers">Customers</Link></li>
      <li><Link to="/categories">Categories</Link></li>
      <li><Link to="/orders">Orders</Link></li>




    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/suppliers/:id" element={<SupplierDetail />} />
      <Route path="/statearraysample" element={<StateArraySample />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:id" element={<CustomerDetail />} />
      <Route path="/customers/add" element={<AddCustomer />} />
      <Route path="/customers/edit/:id" element={<CustomerUpdate />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/add" element={<AddCategory />} />
      <Route path="/orders" element={<Orders />} />

      



      <Route path="*" element={<NotFound />} />
    </Routes>
    <p>Site Footer</p>
  </>
}

export default App;

import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Suppliers from "./pages/Suppliers";
import SupplierDetail from "./pages/SupplierDetail";
import StateIntro from "./stateSample/StateIntro";

function App() {

  return <StateIntro/>
  return <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/suppliers">Suppliers</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/suppliers/:id" element={<SupplierDetail />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <p>Site Footer</p>
  </>
}

export default App;

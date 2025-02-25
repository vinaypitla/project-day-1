import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Vahicle from "./Components/Vahicle";
import Admin from "./Components/Admin";
import Catalog from "./Components/Catalog";
import Payment from "./Components/Payment";
import Contact from "./Components/Contact";
import DashBord from "./Components/DashBord";
import OrderConformation from "./Components/OrderConformation";
import Registration from "./Components/Registration";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Vahicle" element={<Vahicle/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/Catalog" element={<Catalog/>} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/DashBord" element={<DashBord/>} />
          <Route path="/OrderConformation" element={<OrderConformation/>} />
          <Route path="/Registration" element={<Registration/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

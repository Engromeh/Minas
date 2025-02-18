import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Card from "./Pages/Card/Card";
import DepositForm from "./Pages/DepositForm/DepositForm";
import Member from "./Pages/Member/Member";
import ProblemsForm from "./Pages/ProblemsForm/ProblemsForm";
import Dashbord from "./Pages/Dashbord/Dashbord";
import Passports from "./Pages/Passports/Passports";

function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />} >
       <Route path="/Deposit" element={<DepositForm/>} />
       <Route path="/Member" element={<Member/>} />
       <Route path="/Problem" element={<ProblemsForm/>} />
       <Route path="/Dashbord" element={<Dashbord/>} />
       <Route path="/Passport" element={<Passports/>} />


        <Route path="/card" element={<Card />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

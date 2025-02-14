import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Card from "./Pages/Card/Card";
import DepositForm from "./Pages/DepositForm/DepositForm";

function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />} >
       <Route path="/Deposit" element={<DepositForm/>} />
        <Route path="/card" element={<Card />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

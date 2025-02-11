import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidbar from "./Sidbar/Sidbar";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
    <Routes>
    <Route  path="/" element={<Layout />} />

      <Route  path="/Navbar " element={<Navbar />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;

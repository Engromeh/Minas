import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Sidbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Navbar />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;

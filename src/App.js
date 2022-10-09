import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

import Navigate from "./components/Navigate";
import LaptopPage from "./pages/LaptopPage";
import PhonePage from "./pages/PhonePage";
import HeadPhonePage from "./pages/HeadPhonePage";
import TelevisionPage from "./pages/TelevisionPage";
import MonitorPage from "./pages/MonitorPage";
import LaptopSinglePage from "./pages/LaptopSinglePage";

function App() {
  return (
    <>
      <Header></Header>
      <Navigate></Navigate>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />
        <Route path=":uuid" element={<LaptopSinglePage />} />
        {/*  */}
        {/* LaptopPage */}
        <Route path="/laptop" element={<LaptopPage />} />
        <Route path="laptop/:uuid" element={<LaptopSinglePage />} />
        {/*  */}
        <Route path="/phone" element={<PhonePage />} />
        <Route path="/headphone" element={<HeadPhonePage />} />
        <Route path="/television" element={<TelevisionPage />} />
        <Route path="/monitor" element={<MonitorPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

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
import TelevisionSinglePage from "./pages/TelevisionSinglePage";
import PhoneSinglePage from "./pages/PhoneSinglePage";
import MonitorSinglePage from "./pages/MonitorSinglePage";

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

        {/* PhonePage */}
        <Route path="/phone" element={<PhonePage />} />
        <Route path="/phone/:uuid" element={<PhoneSinglePage />} />

        {/*  */}
        <Route path="/headphone" element={<HeadPhonePage />} />

        {/* televisionPage */}
        <Route path="/television" element={<TelevisionPage />} />
        <Route path="/television/:uuid" element={<TelevisionSinglePage />} />
        {/*  */}

        {/* monitorPage */}
        <Route path="/monitor" element={<MonitorPage />} />
        <Route path="/monitor/:uuid" element={<MonitorSinglePage />} />

        {/*  */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

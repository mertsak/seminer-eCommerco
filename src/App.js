import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Navigate from "./components/Navigate";
import LaptopPage from "./pages/LaptopPage";
import PhonePage from "./pages/PhonePage";
import HeadPhonePage from "./pages/HeadPhonePage";
import TelevisionPage from "./pages/TelevisionPage";
import MonitorPage from "./pages/MonitorPage";

function App() {
  return (
    <>
      <Header></Header>
      <Navigate></Navigate>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laptop" element={<LaptopPage />} />
        <Route path="/phone" element={<PhonePage />} />
        <Route path="/headphone" element={<HeadPhonePage />} />
        <Route path="/television" element={<TelevisionPage />} />
        <Route path="/monitor" element={<MonitorPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

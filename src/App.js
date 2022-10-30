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
import HeadPhoneSinglePage from "./pages/HeadPhoneSinglePage";
import MyBasketPage from "./pages/MyBasketPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <>
      <Header></Header>
      <Navigate></Navigate>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />
        {/*  */}
        {/* LaptopPage */}
        <Route path="/laptop" element={<LaptopPage />} />
        <Route path="/laptop/:uuid" element={<LaptopSinglePage />} />
        {/*  */}

        {/* PhonePage */}
        <Route path="/phone" element={<PhonePage />} />
        <Route path="/phone/:uuid" element={<PhoneSinglePage />} />

        {/*  */}

        {/* headphonePage */}
        <Route path="/headphone" element={<HeadPhonePage />} />
        <Route path="/headphone/:uuid" element={<HeadPhoneSinglePage />} />

        {/*  */}

        {/* televisionPage */}
        <Route path="/television" element={<TelevisionPage />} />
        <Route path="/television/:uuid" element={<TelevisionSinglePage />} />
        {/*  */}

        {/* monitorPage */}
        <Route path="/monitor" element={<MonitorPage />} />
        <Route path="/monitor/:uuid" element={<MonitorSinglePage />} />

        {/*  */}

        {/* login , register */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*  */}

        {/* favoritePage */}
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/favorites/laptop/:uuid" element={<LaptopSinglePage />} />
        <Route path="/favorites/phone/:uuid" element={<PhoneSinglePage />} />
        <Route
          path="/favorites/headphone/:uuid"
          element={<HeadPhoneSinglePage />}
        />
        <Route
          path="/favorites/television/:uuid"
          element={<TelevisionSinglePage />}
        />
        <Route
          path="/favorites/monitor/:uuid"
          element={<MonitorSinglePage />}
        />
        {/*  */}

        {/* myBasketPage */}
        <Route path="/myBasket" element={<MyBasketPage />} />
        <Route path="/myBasket/laptop/:uuid" element={<LaptopSinglePage />} />
        <Route path="/myBasket/phone/:uuid" element={<PhoneSinglePage />} />
        <Route
          path="/myBasket/headphone/:uuid"
          element={<HeadPhoneSinglePage />}
        />
        <Route
          path="/myBasket/television/:uuid"
          element={<TelevisionSinglePage />}
        />
        <Route path="/myBasket/monitor/:uuid" element={<MonitorSinglePage />} />
        {/*  */}
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

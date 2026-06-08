import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/products" element={<Products />} />

        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
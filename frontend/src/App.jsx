import "./App.css";
import { Footer } from "./components/Footer/Footer";
import "react-quill/dist/quill.snow.css";
import NavBar from "./components/Nav/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Categories } from "./components/Categories/Categories";
import Nosotros from "./pages/Nosotros";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



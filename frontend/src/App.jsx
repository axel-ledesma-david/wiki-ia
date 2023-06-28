import "./App.css";
import { Footer } from "./components/Footer/Footer";
import "react-quill/dist/quill.snow.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import { Categories } from "./components/Categories/Categories"; */
import Nosotros from "./pages/Nosotros";
import Home from "./pages/Home/Home";
import CategoriesPage from "./pages/Categories/CategoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<CategoriesPage />} />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



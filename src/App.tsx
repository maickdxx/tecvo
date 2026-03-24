import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import PMOC from "./pages/PMOC";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/pmoc" element={<PMOC />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

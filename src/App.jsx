import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/productCard/ProductCard";
import Home from "./pages/Home/Home";
import Bitacora from "./pages/Bitacora/Bitacora";
import ProfilePage from "./pages/Profile/ProfilePage";
import JsonDataPage from "./pages/JsonDataPage/JsonDataPage";
import ApiDataPage from "./pages/ApiDataPage/ApiDataPage";
import DiagramsPage from "./pages/DiagramsPage/DiagramsPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Rutas del TP1 migradas */}
        <Route path="/" element={<Home />} />
        <Route path="/bitacora" element={<Bitacora />} />
        <Route path="/profile/:name" element={<ProfilePage />} />

        {/* Nuevas rutas requeridas para el TP2 */}
        <Route path="/json-data" element={<JsonDataPage />} />
        <Route path="/api-data" element={<ApiDataPage />} />
        <Route path="/diagrams" element={<DiagramsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

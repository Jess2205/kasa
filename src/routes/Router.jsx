// src/routes/Router.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import Page404 from "../pages/Page404";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

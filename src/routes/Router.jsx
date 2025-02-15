import { Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home/Home";
import Logement from "/src/pages/Logement/Logement";
import { Page404 } from "/src/pages/Page404/Page404";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRouter;

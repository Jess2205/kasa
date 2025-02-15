import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
};

export default App;

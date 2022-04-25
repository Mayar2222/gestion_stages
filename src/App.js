import logo from "./logo.svg";
import "./assets/css/style.css";
//import "./assets/css/custom.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Admin from "./pages/Admin/Admin";
import Utilisateurs from "./pages/Admin/Utilisateurs";
import Formations from "./pages/Admin/Formation";
import Entrprises from "./pages/Admin/Entrprises";
import Offres from "./pages/Admin/Offres";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div classname="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="admin" element={<Admin />}>
              <Route path="" index element={<Utilisateurs />} />
              <Route path="formations" element={<Formations />} />
              <Route path="entrprise" element={<Entrprises />} />
              <Route path="offres" element={<Offres />} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </Provider>
  );
}

export default App;

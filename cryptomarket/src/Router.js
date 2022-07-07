import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Detalle from "./pages/Detalle";
import NavBar from "./components/NavBar/NavBar";

const Router = () => {
  const routes = [
    { id: 0, path: "/", component: <Home /> },
    { id: 1, path: "/cart", component: <Cart /> },
    { id: 2, path: "/contact", component: <Contacto /> },
    { id: 3, path: "/product/:id", component: <Detalle /> },
    { id: 4, path: "/products/:category", component: <Home /> },
    { id: 5, path: "*", component: <NotFound /> },
  ];

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {routes.map((r) => (
          <Route path={r.path} element={r.component} key={r.id} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

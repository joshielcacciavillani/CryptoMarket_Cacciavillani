import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Detalle from "./pages/Detalle";
import ProductList from "./pages/ProductList";

function App() {
  return (
    //JSX
    <div className='App'>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/contact' element={<Contacto />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/product/:id' element={<Detalle />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

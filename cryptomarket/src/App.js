import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Detalle from "./pages/Detalle";

function App() {
  return (
    //JSX
    <div className='App'>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/contact' element={<Contacto />} />
          <Route path='/product/:id' element={<Detalle />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

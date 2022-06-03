import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";
import { useState } from "react";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' className='header-primary'>
      <Toolbar>
        <div className='container-logo'>
          <img src='./logo2.gif' alt='logo' />
        </div>
        <ul className='navbar'>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant='text'
              className='navbar__btn'
            >
              Inicio
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant='text'
              className='navbar__btn'
            >
              Productos
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant='text'
              className='navbar__btn'
            >
              Preguntas Frecuentes
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant='text'
              className='navbar__btn'
            >
              Contacto
            </Button>
          </li>
        </ul>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

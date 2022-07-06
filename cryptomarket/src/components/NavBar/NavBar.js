import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const categories = [
    { name: "bitcoin", category: "Bitcoin", key: "1" },
    { name: "lockchainnetworks", category: "Blockchain networks", key: "2" },
    { name: "smartcontractplatform", category: "Smart Contract Platform", key: "3" },
    { name: "stablecoins", category: "Stablecoins", key: "4" },
  ];
  const linkProduct = categories.map((cat) => {
    return (
      <MenuItem onClick={handleClose} key={cat.key}>
        <Link to={`/products/${cat.category}`}>{cat.name}</Link>
      </MenuItem>
    );
  });

  return (
    <AppBar position='static' className='header-primary'>
      <Toolbar>
        <div className='container-logo'>
          <Link to='/'>
            <img src='./logo2.gif' alt='logo' />
          </Link>
        </div>
        <ul className='navbar'>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant='text'
              className='navbar__btn'
            >
              <Link to='/'>Inicio</Link>
            </Button>
          </li>
          <li>
            <Button
              id='basic-button'
              onClick={handleClick}
              disableRipple
              variant='text'
              className='navbar__btn'
            >
              Productos
            </Button>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {linkProduct}
            </Menu>
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
              <Link to='/contact'>Contacto</Link>
            </Button>
          </li>
        </ul>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

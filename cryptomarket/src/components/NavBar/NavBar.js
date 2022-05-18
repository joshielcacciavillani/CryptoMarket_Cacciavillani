import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//los componentes se llaman Upper CammelCase
const NavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar style={{ backgroundColor: "#3949ab" }}>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          CryptoMarket
        </Typography>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>PortFolio</Button>
        <Button color='inherit'>Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

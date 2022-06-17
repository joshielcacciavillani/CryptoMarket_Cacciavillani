import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../Context/CartContext";

const Cart = () => {
  const { cartListItems } = useContext(CartContext);

  return (
    <Container>
      <h2>Checkout: </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Descripcion</TableCell>
              <TableCell align='right'>Cantidad</TableCell>
              <TableCell align='right'>Precio Unitario</TableCell>
              <TableCell align='right'>Quitar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartListItems.map((item) => {
              const { id, title, image, price, cantidad } = item;
              return (
                <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    <img src={`/${image}`} alt='' />
                  </TableCell>
                  <TableCell align='right'>{title}</TableCell>
                  <TableCell align='right'>{cantidad}</TableCell>
                  <TableCell align='right'>{price}</TableCell>
                  <TableCell align='right'>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div classNane='cart—footer'>
          <Button className='btn-custom'>Continuar Comprando</Button>
          <div cart-checkout-details>
            <div className='cart-checkout subtotal'>
              <p>Total</p>
              <span>$2000</span>
            </div>
            <div className='cart-checkout total'>
              <p>Total</p>
              <span>$2000</span>
            </div>
            <Button className='btn-custom'>Completar Compra</Button>
          </div>
        </div>
      </TableContainer>
    </Container>
  );
};

export default Cart;

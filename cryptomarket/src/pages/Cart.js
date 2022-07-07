import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Modal, Container } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../Context/CartContext";
import TextField from "@mui/material/TextField";
import { addDoc, collection } from "firebase/firestore";
import db from "../Utils/firebaseConfig";

const Cart = () => {
  const { cartListItems, totalPrice, clearAllProducts } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
      };
    }),
    total: totalPrice,
  });
  const [success, setSuccess] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, buyer: formValue });
    saveData({ ...order, buyer: formValue });
  };

  //DRY = Dont Repeat Yourself
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const finishOrder = () => {
    navigate("/");
  };

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    // console.log("orden generada: ", orderDoc.id);
    setSuccess(orderDoc.id);
    clearAllProducts();
  };

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
      <Modal
        title={success ? "Compra exitosa" : "Formulario de contacto"}
        open={showModal}
        handleClose={() => setShowModal(false)}
      >
        {success ? (
          <div>
            La order se genero con exito! Numero de orden: {success}
            <button onClick={finishOrder}>Aceptar</button>
          </div>
        ) : (
          <form className='form-contact' onSubmit={handleSubmit}>
            <TextField
              id='outlined-basic'
              name='name'
              label='Nombre y Apellido'
              variant='outlined'
              value={formValue.name}
              onChange={handleChange}
            />
            <TextField
              id='outlined-basic'
              name='phone'
              label='Telefono'
              variant='outlined'
              value={formValue.phone}
              onChange={handleChange}
            />
            <TextField
              id='outlined-basic'
              name='email'
              label='Mail'
              value={formValue.email}
              variant='outlined'
              onChange={handleChange}
            />
            <button type='submit'>Enviar</button>
          </form>
        )}
      </Modal>
    </Container>
  );
};

export default Cart;

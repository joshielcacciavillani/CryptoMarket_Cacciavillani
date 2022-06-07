import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const Modal = ({ handleClose, open, children }) => {
  const [count, setCount] = useState(0);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogContent>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

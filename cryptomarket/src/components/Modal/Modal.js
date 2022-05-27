import { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const Modal = ({ handleClose, open, children }) => {
  const [count, setCount] = useState(1);

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

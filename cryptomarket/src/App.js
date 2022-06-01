import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CardList from "./components/CardList/CardList";
// import ItemListContainer from "./components/ItemListConstainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import SnackBar from "./components/SnackBar/SnackBar";
// import Modal from "./components/Modal/Modal";

function App() {
  // const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    //JSX
    <div className='App'>
      <NavBar />
      <div className='general-container'>
        <CardList title={"Productos Recomendados"} />
      </div>
      <ItemDetailContainer />
    </div>
  );
}

export default App;

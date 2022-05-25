import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    //JSX
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <main>
        <CardList title='Productos más vendidos'></CardList>
      </main>
    </div>
  );
}

export default App;

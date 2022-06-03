import CardList from "../components/CardList/CardList";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const Home = () => {
  return (
    <>
      <div className='general-container'>
        <CardList title={"Productos Recomendados"} />
      </div>
      <ItemDetailContainer />
    </>
  );
};

export default Home;

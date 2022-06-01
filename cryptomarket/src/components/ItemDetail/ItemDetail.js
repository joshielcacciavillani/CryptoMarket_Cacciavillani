const ItemDetail = ({ data }) => {
  console.log("data desde detail", data);
  return (
    <>
      <div>
        <h2>{data.title}</h2>
        <p>{data.price}</p>
      </div>
    </>
  );
};

export default ItemDetail;

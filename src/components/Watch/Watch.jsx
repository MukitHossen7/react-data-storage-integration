const Watch = ({ watch }) => {
  const { brand, model, price, id } = watch;
  return (
    <div className="border-2 border-r-teal-700 rounded-xl m-4 p-5">
      <h4>Id : {id}</h4>
      <h3>Brand : {brand}</h3>
      <h4>Model : {model}</h4>
      <h4>Price : {price}</h4>
    </div>
  );
};

export default Watch;

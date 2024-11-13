function ServicesItem({ headerName, text, price, active, a, obj, arr }) {
  //   let headerName = 'Lorem ipsum dolor sit amet. let'
  //   let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,suscipit!'
  console.log(a);
  console.log(obj);
  console.log(arr);

  return (
    <li>
      <h4>{headerName}</h4>
      <p>{text}</p>
      <p>{price}</p>
      <p>{active ? "Доступно" : "Недоступно"}</p>
    </li>
  );
}

export default ServicesItem;

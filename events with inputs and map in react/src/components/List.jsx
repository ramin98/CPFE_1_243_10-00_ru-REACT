import { useState } from "react";
import data from "../data/data";
import User from "./User";

function List() {
  let [arr, setArr] = useState(data);

//   let users = arr.map((user) => {
//     return (
//       <li>
//         <p>{user.name}</p>
//         <p>{user.username}</p>
//         <p>{user.email}</p>
//       </li>
//     );
//   });

  return (
    <>
      <div>
        <p onClick={() => console.log(arr)}>ARR</p>
        <ul>
          {arr.map((user) => <User key={user.id} {...user}/>)}
        </ul>
      </div>
    </>
  );
}

export default List;

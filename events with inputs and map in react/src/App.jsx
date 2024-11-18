import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  // let [login, setLogin] = useState("");
  // let [password, setPassword] = useState("");
  let [formValues, setFormValues] = useState({login: "", password: ""});

  const handleFormValues = (ev) => {
    // if(ev.target.name === 'login'){
    //   setFormValues({...formValues, login: ev.target.value})
    // } else if(ev.target.name === 'password'){
    //   setFormValues({...formValues, password: ev.target.value})
    // }
    setFormValues({...formValues, [ev.target.name]: ev.target.value})
    console.log(formValues, "formValues");
  };

  // const handleLoginValue = (ev) => {
  //   setLogin(ev.target.value);
  //   console.log(login, "login");
  // };

  // const handlePasswordValue = (ev) => {
  //   setPassword(ev.target.value);
  //   console.log(password, "password");
  // };

  const auth = (ev) => {
    ev.preventDefault()
    console.log(formValues);
  };

  const checkedInputs = !(formValues.login.length >= 8 && formValues.password.length >= 8);

  return (
    <>
      <form onSubmit={auth}>
        <input
          type="text"
          name="login"
          onInput={handleFormValues}
          placeholder="LOGIN"
        />
        <input
          type="text"
          name="password"
          onChange={handleFormValues}
          placeholder="PASSWORD"
        />
        <button disabled={checkedInputs}>
          LOGIN
        </button>
      </form>
      <List/>
    </>
  );
}

export default App;

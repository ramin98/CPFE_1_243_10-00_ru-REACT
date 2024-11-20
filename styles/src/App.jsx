import { useState } from "react";
import myStyles from "./App.module.css";
import myStyles2 from "./App2.module.css";
import { parStyles, parStyles2 } from "./assets/styles/styles";
import styled from "styled-components";

function App() {
  let [color, setColor] = useState("green");
  console.log(myStyles);

  const changeColor = () => {
    setColor(color === "green" ? "red" : "green");
  };

  return (
    <>
      <button onClick={changeColor}>CHANGE COLOR</button>
      <p
        className={myStyles2.colors}
        style={{
          backgroundColor: color,
          fontSize: "40px",
          fontWeight: "900",
        }}
      >
        HELLOW WORLD
      </p>
      <p className={myStyles.colors} style={parStyles2}>
        HELLOW WORLD 2
      </p>
      <Parampus
        changeStyle={color}
        changeStyle2={color === "red" ? "green" : "red"}
      >
        HELLOW WORLD 3
      </Parampus>
      <Button>
        HELLO
        <Span
          text={`transition: 1s;
  display: block;
  background-color: pink;`}
        >
          "H"
        </Span>
      </Button>
      <UnorderedList>
        <ListItem>
          <Link>OKAY</Link>
        </ListItem>
      </UnorderedList>
    </>
  );
}

export default App;



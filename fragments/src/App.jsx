import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import Fooditems from "./componenets/fooditems";
import ErrorMessage from "./componenets/ErrorMessage";
import Container from "./componenets/container";
import FoodInput from "./componenets/Foodinput";

function App() {
  /*   let fooditems = []; */
  let [fooditems, setfoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let NewValue = event.target.value;
      let newitems = [...fooditems, NewValue];
      setfoodItems(newitems);
      console.log(NewValue);
    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={fooditems}></ErrorMessage>
      <Fooditems items={fooditems}></Fooditems>
    </Container>
  );
}

export default App;

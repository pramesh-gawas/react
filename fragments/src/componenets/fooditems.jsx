import { useState } from "react";
import Item from "./item";

const Fooditems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditems={item}
          bought={activeItems.includes(item)}
          handleBuyButtonCLicked={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default Fooditems;

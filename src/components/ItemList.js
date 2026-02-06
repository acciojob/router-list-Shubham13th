import React from "react";
import { Link } from "react-router-dom";

const ItemList = () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/items/${index + 1}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

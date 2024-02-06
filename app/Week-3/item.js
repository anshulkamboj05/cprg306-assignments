import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <ul>
      <li>
        NAME: {name}
      </li>
      <li>
        Buy {quantity} in the  {category} department.
      </li>
      </ul>
  );
}

export default Item;

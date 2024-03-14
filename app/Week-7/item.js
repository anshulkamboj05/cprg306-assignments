"use client";

import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <div onClick={() => onSelect && onSelect(name, quantity, category)} className="cursor-pointer">
      <ul className="bg-yellow-500 flex flex-col p-2 w-3/4 mt-4 mx-5">
        <div>
          <li className="font-bold text-xl">
            Name: {name}
          </li>
          <li>
            Buy {quantity} in the {category} category
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Item;

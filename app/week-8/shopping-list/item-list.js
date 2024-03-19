"use client"

import React, { useState, useEffect } from "react";
import Item from "./item";

const ItemList = ({ items = [] }) => {
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(items)) {
      const sorted = [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
      });
      setSortedItems(sorted);
    }
  }, [items, sortBy]);

  return (
    <div className="ml-9 mt-10">
      <div className="flex space-x-4 mb-4">
        <span className="text-xl">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-1 rounded ${
            sortBy === "name" ? "bg-gray-400" : "bg-gray-200"
          } hover:bg-orange-300`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-1 rounded ${
            sortBy === "category" ? "bg-gray-400" : "bg-gray-200"
          } hover:bg-orange-300`}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

"use client"

import React, { useState } from "react";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; 
import ItemList from "./item-list";
import itemsData from "./item.json";

function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.trim().toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-white-800 text-black flex">
      <div>
        <h1 className="text-3xl font-bold mb-2 ml-16 p-4">Shopping List</h1>
        <h2 className="text-xl font-bold ml-8">Add a new Item</h2>
        <div className="ml-8">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
export default Page;
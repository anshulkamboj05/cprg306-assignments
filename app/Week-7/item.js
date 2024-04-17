const Item = ({ name, quantity, category, onSelect}) => {

  return (
  <div onClick={() => onSelect(name, quantity,category)} className="cursor-pointer">
    <ul className="bg-gray-400 p-4 w-1/2 mt-6 mx-4 rounded-xl" >
      <li className="font-bold text-xl">
        Name: {name}
      </li>
      <li>
        buy {quantity} in the {category} category 
      </li>
    </ul>
  </div>
  );
}

export default Item;
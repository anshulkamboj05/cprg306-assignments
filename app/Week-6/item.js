const Item = ({ name, quantity, category, onSelect }) => {
    return (
    <div onClick = {()=>onSelect (name,quantity,category)} className="cursor-pointer">
     <ul className="bg-yellow-500 p-4 w-1/3 mt-6 mx-4">
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
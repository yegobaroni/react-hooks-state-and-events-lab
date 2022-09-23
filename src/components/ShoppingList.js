import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [usedCategory, setUsedCategory] = useState('All')
  
  const handleChange = (e) => {
    return setUsedCategory(e.target.value)
  }

  const displayItems = items.filter(item => {
    return usedCategory === 'All' ? true : item.category === usedCategory
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

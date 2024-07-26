import { useState } from "react";
import Item from "./Item";

function PackingList({items, onhandleItemDelete, onhandleItemUpdate, onhandleClearList}){
    const [sortBy, setSortBy] = useState('description');
    let sortedItems = [];
    
    if(sortBy === 'input') sortedItems=items;
    if(sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
    if(sortBy ==='packed') sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
    
    function trackSort(value){
      console.log("vaaa", value);
      setSortBy(value);
    };
    
    return(
      <div className="list">
        <ul>{sortedItems.map((i) => <Item item={i} key={i} onhandleItemDelete={onhandleItemDelete} onhandleItemUpdate={onhandleItemUpdate}/>)}</ul>
        <div className="actions">
          <select value={sortBy} onChange={(e)=>trackSort(e.target.value)}>
            <option value='input'>Sort by Input</option>
            <option value='description'>Sort by Description</option>
            <option value='packed'>Sort by packed</option>
          </select>
          <button onClick={onhandleClearList}>Clearing the list</button>
        </div>
      </div>
    )
  }
  
export default PackingList;
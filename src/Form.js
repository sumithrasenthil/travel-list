import { useState } from "react";

function Form({onAddItems}){
  
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(5)
  
    function handleSubmit(e){
      e.preventDefault();
      
      if (!description) return;
      
      setDescription('');
      setQuantity(5);
      const newItem = {description: description, quantity: quantity, package: false, id: Date.now}
      onAddItems(newItem)
    }
    return(
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What you want for your trip? 🤔</h3>
        <select value = {quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({length: 20}, (_,i)=> i+1).map((num) => (<option value={num} key={num}>{num}</option>))}
        </select>
        <input type='text' placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button>Add</button>
      </form>
    )
  }
  
  export default Form;
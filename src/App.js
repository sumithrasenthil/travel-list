import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App(){
  const [items, setItems] = useState(initialItems)

  function addItems(item){
    setItems((items) => [...items, item ])
  }
  
  function handleItemDelete(id){
    console.log('handleItemDelete', id)
    setItems((items) => items.filter((i) => i.id !== id))
  }
  
  function handleItemUpdate(id){
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }
  
  return(
    <div className="app">
      <Logo/>
      <Form onAddItems={addItems}/>
      <PackingList items={items} onhandleItemDelete={handleItemDelete} onhandleItemUpdate={handleItemUpdate}/>
      <Footer/>
    </div>

  )
}

function Logo(){
  return(
    <h1> 🌄 Far away🎄</h1>
  )
}

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

function PackingList({items, onhandleItemDelete, onhandleItemUpdate}){
  return(
    <div className="list">
      <ul>{items.map((i) => <Item item={i} key={i} onhandleItemDelete={onhandleItemDelete} onhandleItemUpdate={onhandleItemUpdate}/>)}</ul>
    </div>
  )
}

function Item({item, onhandleItemDelete, onhandleItemUpdate}){
  const {id, description, quantity, packed} = item
  // const {handleItemDelete} = props.onhandleItemDelete
  // console.log('propsssss', props)
  return(
    <li>
      <input type='checkbox' value={item.packed} onChange={() => onhandleItemUpdate(id)}/>
      <span style={packed? {textDecoration: "line-through"} : {}}>
        {quantity} {description}
      </span>
      <button onClick={()=>onhandleItemDelete(id)}>❌</button>
    </li>
  )
}

function Footer(){
  return(
    <footer className="stats">
      <em>You have X number of items in the lists</em>
    </footer>
  )
  
}
export default App;
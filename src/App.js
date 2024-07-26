import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Footer from "./Footer";
import PackingList from "./PackingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App(){
  const [items, setItems] = useState([])

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
  
  function clearList(){
    const confirmed = window.confirm('Are you sure want to delete?')
    if (confirmed) setItems([]);
  }
  
  return(
    <div className="app">
      <Logo/>
      <Form onAddItems={addItems}/>
      <PackingList items={items} onhandleItemDelete={handleItemDelete} onhandleItemUpdate={handleItemUpdate} onhandleClearList={clearList}/>
      <Footer items={items}/>
    </div>

  )
}

export default App;
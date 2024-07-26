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
  
export default Item;
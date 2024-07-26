
function Footer({items}){
    if (!items.length) return (
      <p className="stats"><em>Start adding the items to the list</em></p>
    )
    
    const itemsLength = items.length;
    const packedCount = items.filter((i) =>i.packed).length
    const packedPercentage = packedCount / itemsLength * 100
    return(
      <footer className="stats">
        {packedPercentage === 100 ? <em>You got everything , ready to go</em> :<em>You have {itemsLength} number of items in the lists with {packedCount} packed {packedPercentage}%</em>}
      </footer>
    )
    
  }
  
export default Footer;
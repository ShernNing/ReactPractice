const DessertsList = (props) => {
  const lowCaloriesDesserts = props.fgh
    .filter((abc) => {
      return abc.calories < 600;
    })
    .sort((afg, bfg) => { 
      return afg.calories - bfg.calories; 
    })
    .map((abc) => { 
      return ( 
        <li>
          {abc.name} - {abc.calories} cal - {abc.createdAt}         
        </li> 
      ); 
    }); 
  return <ul>{lowCaloriesDesserts}</ul>; 
 
 }
 export default DessertsList; 
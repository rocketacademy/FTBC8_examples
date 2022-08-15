import { useState, useContext } from "react";
import { ThemeContext, ExampleContext } from "../App";

const ShoppingList = (props) => {
  const [shoppingArray, setShoppingArray] = useState(["Apples", "Bread"]);
  const [newItem, setNewItem] = useState("");
  const context = useContext(ThemeContext);
  const exampleContext = useContext(ExampleContext);
  console.log(context);
  console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newArray = [...shoppingArray, newItem];
    console.log(newArray);
    setShoppingArray(newArray);
  };

  return (
    <div style={context}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={newItem}
          placeholder="Insert new item here"
          onChange={(e) => setNewItem(e.target.value)}
        />

        <input type="submit" value="submit" />
      </form>
      <ol>
        {shoppingArray ? (
          shoppingArray.map((shoppingItem, index) => (
            <li key={index}>{shoppingItem}</li>
          ))
        ) : (
          <p>You dont have a list!</p>
        )}
      </ol>
      <p>{exampleContext}</p>
      <button onClick={props.setLight}>Light</button>
      <button onClick={props.setDark}>Dark</button>
    </div>
  );
};

export default ShoppingList;

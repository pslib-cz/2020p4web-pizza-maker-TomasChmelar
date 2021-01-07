import React from "react";
import {ListGroup} from "reactstrap";

const Ingredients = () => {
  const ingredience = {name: "pork cut", category: "meat"};
  const [pole, setPole] = useState(ingredience);
    const AddIngredience = () => {
        setPole(pole.concat(name = "oregano", category = "koreni"));
      }
    
    return (
        <div className="App">
          <ListGroup>
          {items.map((item, index) => (<Item key={index} index={index} item={item} />))}
            </ListGroup>
        </div>
      );
}

export default Ingredients;
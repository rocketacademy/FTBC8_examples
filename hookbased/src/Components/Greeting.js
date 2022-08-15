import { ExampleContext } from "../App";
import { useContext } from "react";

const Greeting = (props) => {
  const context = useContext(ExampleContext);

  return (
    <div>
      <input
        defaultValue={context}
        onChange={(e) => props.changeContext(e.target.value)}
        name="context"
        value={context}
      />
      <h6>Welcome</h6>
      <p>{props.name}</p>
      <p>{props.age}</p> <p>{context}</p>
    </div>
  );
};

export default Greeting;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // use navigate
    alert(email, password, username);
    navigate("/pokemon");
  };
  console.log(props.login);

  return (
    <div>
      <h2>{props.login == "login" ? "Login Form" : "Signup Form"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label> <br />
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Sam O'Shaughnessy"
        />
        <br />
        <label>Email:</label> <br />
        <input
          name="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="sam@sam.com"
        />
        <br />
        <label>Password:</label> <br />
        <input
          name="password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="123"
        />
        <br />
        <input
          type="submit"
          value={props.login === "login" ? "Login" : "Signup"}
        />
      </form>
    </div>
  );
};

export default Form;

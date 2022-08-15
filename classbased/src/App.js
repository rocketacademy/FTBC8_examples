import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import APIScreen from "./Screens/APIScreen";
import WithForm from "./Components/WithForm";
import Form from "./Components/Form";
import Pokemon from "./Components/Pokemon";
import WithPokemon from "./Components/WithPokemon";
import Greeting from "./Components/Greeting";
import React from "react";

export const ExampleContext = React.createContext("default value");

const App = () => {
  const LoginForm = WithForm(Form, "login");
  const SignupForm = WithForm(Form, "signup");

  const Pikachu = WithPokemon(
    Pokemon,
    `https://pokeapi.co/api/v2/pokemon/pikachu`
  );
  const Geodude = WithPokemon(
    Pokemon,
    "https://pokeapi.co/api/v2/pokemon/geodude"
  );

  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link
          style={{
            paddingBottom: "1rem",
            margin: "10px",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            paddingBottom: "1rem",
            margin: "10px",
          }}
          to="/login"
        >
          Login
        </Link>
        <Link
          style={{
            paddingBottom: "1rem",
            margin: "10px",
          }}
          to="/signup"
        >
          Signup
        </Link>

        <Link
          style={{
            paddingBottom: "1rem",
            margin: "10px",
          }}
          to="/api"
        >
          API
        </Link>
      </nav>
      <ExampleContext.Provider value="a new value">
        <Routes>
          <Route path="/" element={<Greeting name="Foong" age="30" />} />
          <Route path="/api" element={<APIScreen />}>
            <Route path="pokemon1" element={<Pikachu />} />
            <Route path="pokemon2" element={<Geodude />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="*"
            element={
              <div>
                <h1>You failed at getting a page.</h1>
              </div>
            }
          />
        </Routes>
      </ExampleContext.Provider>
    </div>
  );
};

export default App;

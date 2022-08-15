import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import APIScreen from "./Screens/APIScreen";
import WithForm from "./Components/WithForm";
import Form from "./Components/Form";
import Pokemon from "./Components/Pokemon";
import WithPokemon from "./Components/WithPokemon";
import Greeting from "./Components/Greeting";
import React from "react";
import { createContext, useState } from "react";
import ShoppingList from "./Components/ShoppingList";

export const ExampleContext = createContext();

export const themeStyles = {
  light: {
    backgroundColor: "#fff",
    color: "#000",
  },
  dark: {
    backgroundColor: "#000",
    color: "#fff",
  },
};

export const ThemeContext = createContext();

const App = () => {
  const LoginForm = WithForm(Form, "login");
  const SignupForm = WithForm(Form, "signup");

  const Pikachu = WithPokemon(Pokemon, "pikachu");
  const Geodude = WithPokemon(Pokemon, "geodude");

  const [contextValue, setContextValue] = useState("Test Value");

  const [theme, setTheme] = useState({
    backgroundColor: "#000",
    color: "#fff",
  });

  const setDark = () => {
    setTheme({
      backgroundColor: "#000",
      color: "#fff",
    });
  };

  const setLight = () => {
    setTheme({
      backgroundColor: "#fff",
      color: "#000",
    });
  };

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
        <Link
          style={{
            paddingBottom: "1rem",
            margin: "10px",
          }}
          to="/shopping"
        >
          ShoppingList
        </Link>
      </nav>
      <ExampleContext.Provider value={contextValue}>
        <Routes>
          <Route
            path="/"
            element={
              <Greeting changeContext={setContextValue} name="Foong" age="30" />
            }
          />
          <Route path="/api" element={<APIScreen />}>
            <Route path="pokemon1" element={<Pikachu />} />
            <Route path="pokemon2" element={<Geodude />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/shopping"
            element={
              <ThemeContext.Provider value={theme}>
                <ShoppingList setDark={setDark} setLight={setLight} />
              </ThemeContext.Provider>
            }
          />

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

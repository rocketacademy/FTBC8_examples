import { Outlet, Link } from "react-router-dom";

const APIScreen = () => {
  return (
    <div>
      <Link
        style={{
          paddingBottom: "1rem",
          margin: "10px",
        }}
        to="pokemon1"
      >
        Pokemon One
      </Link>
      <Link
        style={{
          paddingBottom: "1rem",
          margin: "10px",
        }}
        to="pokemon2"
      >
        Pokemon Two
      </Link>
      <br />
      <br />
      <br />
      <br />

      <Outlet />
    </div>
  );
};

export default APIScreen;

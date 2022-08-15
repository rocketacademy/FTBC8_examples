import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = (props) => {
  const [pokeInfo, setPokeInfo] = useState({
    name: "",
    sprite: "",
    weight: 0,
  });

  const getData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
      .then((data) => {
        console.log(data);
        setPokeInfo({
          name: data.data.name,
          sprite: data.data.sprites.front_default,
          weight: data.data.weight,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {pokeInfo.name !== "" ? (
        <div>
          <h4>{pokeInfo.name}</h4>
          <h5>{pokeInfo.weight}</h5>
          <img src={pokeInfo.sprite} alt={pokeInfo.name} />
        </div>
      ) : (
        "Failed"
      )}
    </div>
  );
};

export default Pokemon;

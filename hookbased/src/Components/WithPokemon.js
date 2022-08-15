import React from "react";

const WithPokemon = (WrappedComponent, selectedProps) => {
  console.log(selectedProps);
  return () => {
    return <WrappedComponent pokemon={selectedProps} />;
  };
};

export default WithPokemon;

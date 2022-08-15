import React from "react";

const WithPokemon = (WrappedComponent, selectedProps) => {
  console.log(selectedProps);
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <WrappedComponent pokemon={selectedProps} />;
    }
  };
};

export default WithPokemon;

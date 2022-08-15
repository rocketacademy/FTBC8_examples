import React from "react";

const WithForm = (WrappedComponent, selectedProps) => {
  console.log(selectedProps);
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <WrappedComponent login={selectedProps} />;
    }
  };
};

export default WithForm;

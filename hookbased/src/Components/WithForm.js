import React from "react";

const WithForm = (WrappedComponent, test) => {
  console.log(test);
  return () => {
    return <WrappedComponent login={test} />;
  };
};

export default WithForm;

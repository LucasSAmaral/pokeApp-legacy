import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";

export default props => {
  useComponentDidMount(() => {
    document.title = "About The App";
  });
  return (
    <div className="container__pokeApp">
      <h1 className="pokeApp__FeatureTitle">About The App</h1>
    </div>
  );
};

import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";

export default props => {
  useComponentDidMount(() => {
    document.title = "About Me";
  });
  return (
    <div className="container__pokeApp">
      <h1 className="pokeApp__FeatureTitle">About Me</h1>
    </div>
  );
};

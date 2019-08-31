import React from "react";
import PokeAppFeatures from "../components/pokeAppFeature/pokeAppFeatures";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../reducers/reducer";
import "../style/style.scss";

const MainPage = () => {
  return (
    <div className="container__pokeApp">
      <PokeAppFeatures />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

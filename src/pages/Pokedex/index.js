import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../reducers/reducer";
import Pokedex from "./component";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokedex);

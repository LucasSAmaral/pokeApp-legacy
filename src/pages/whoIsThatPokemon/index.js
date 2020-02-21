import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../reducers/reducer";
import WhoIsThatPokemon from "./component";

export default connect(mapStateToProps, mapDispatchToProps)(WhoIsThatPokemon);

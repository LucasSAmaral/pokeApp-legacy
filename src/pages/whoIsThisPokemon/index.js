import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../reducers/reducer";
import WhoIsThisPokemon from "./component";

export default connect(mapStateToProps, mapDispatchToProps)(WhoIsThisPokemon);

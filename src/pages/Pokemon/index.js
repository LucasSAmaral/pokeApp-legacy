import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../reducers/reducer";
import Pokemon from "./component";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);

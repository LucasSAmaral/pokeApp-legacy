import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../reducers/reducer";
import MainPage from "../MainPage/component";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

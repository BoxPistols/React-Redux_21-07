import { connect } from "react-redux";
import Front from "../front/Front";

const mapStateProps = (state) => {
  return {
    number: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    plus: (num) => {
      dispatch({ type: "PLUS", payload: { num: num } });
    },
    minus: (num) => {
      dispatch({ type: "MINUS", payload: { num: num } });
    }
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Front);

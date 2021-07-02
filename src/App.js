import "./styles.scss";

import { connect } from "react-redux";

const App = ({ number }) => {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h2>{number}</h2>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    number: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    plus: (num) => {
      dispatch({ type: "PLUS", payload: { num: num } });
    }
  };
};

export default connect(mapStateProps, mapDispatchToProps)(App);

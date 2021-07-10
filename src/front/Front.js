import "../styles.scss";

export default function Front({ number, plus, minus }) {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h2>{number}</h2>
      <button
        onClick={() => {
          plus(10);
        }}
      >
        CountUp
      </button>
      <button
        onClick={() => {
          minus(10);
        }}
      >
        CountDown
      </button>
    </div>
  );
}

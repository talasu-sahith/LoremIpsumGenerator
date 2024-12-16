import { useState } from "react";
import data from "./data";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setText((prev) => {
  //     var newtext = [];
  //     newtext = data.filter((item, index) => count > index);
  //     return newtext;
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  console.log(text);
  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs :</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      {text.map((item, index) => {
        return (
          <div className="lorem-text" key={index}>
            <p>{item}</p>
          </div>
        );
      })}
    </section>
  );
};
export default App;

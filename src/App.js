import "./App.css";
import Counter from "./components/counter/counter";
import DisplayArray from "./components/display array/displayArray";
import FetchData from "./components/fetchData/fetchData";
import ToggleButton from "./components/toggle button/toggleButton";

function App() {
  return (
    <div className="App">
      <h1>This is a demo of some React apps</h1>
      <p>(ongoing)</p>
      <h3>Mylena Vendramini</h3>
      <a href="https://mylenavendramini.com" target="_blank" rel="noreferrer">
        Take a look at my website
      </a>
      <Counter />
      <FetchData />
      <DisplayArray />
      <ToggleButton />
    </div>
  );
}

export default App;

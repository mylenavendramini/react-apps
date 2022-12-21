import { useState } from "react";

function ToggleButton() {
  const [toggle, setToggle] = useState(true);

  function toggleHandler() {
    setToggle(!toggle);
  }

  return (
    <div className="container">
      <button onClick={toggleHandler}>
        {toggle ? "Hide" : "Show"} the element below
      </button>

      {toggle && <div>Hey guys!</div>}
    </div>
  );
}

export default ToggleButton;

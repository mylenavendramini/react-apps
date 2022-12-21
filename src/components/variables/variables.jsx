import { useRef, useState } from "react";

const Variables = () => {
  // The user have to answer corret. If it's corrent, go to the next question. If it's not, alert.
  let [points, setPoints] = useState(0);
  const inputRefA = useRef(null);
  const inputRefB = useRef(null);
  const inputRefC = useRef(null);
  const inputRefD = useRef(null);

  function handleClickA() {
    let answer = inputRefA.current.value.toLowerCase();

    if (answer === "") {
      alert("You have to type something!");
    } else if (answer === "functional" || answer === "global") {
      alert("Right answer!");
      points += 1;
      console.log("Points: " + points);
      setPoints(points);
      answer = "oi";
    } else {
      alert("Wrong answer! It's functional/global!");
      points -= 1;
      //   console.log("Points: " + points);
      answer = "oi";
    }
  }
  function handleClickB() {
    let answer = inputRefB.current.value.toLowerCase();

    if (answer === "") {
      alert("You have to type something!");
    } else if (answer === "block") {
      alert("Right answer!");
      points += 1;
      console.log("Points: " + points);
      setPoints(points);
    } else {
      alert("Wrong answer! It's block!");
      //   points -= 1;
      console.log("Points: " + points);
    }
  }

  function handleClickC() {
    let answer = inputRefC.current.value.toLowerCase();

    if (answer === "") {
      alert("You have to type something!");
    } else if (answer === "no") {
      alert("Right answer! Because they are block scope!");
      points += 1;
      console.log("Points: " + points);
      setPoints(points);
    } else {
      alert("Wrong answer! Let and const are block scope!");
      //   points -= 1;
      console.log("Points: " + points);
    }
  }

  function handleClickD() {
    let answer = inputRefD.current.value.toLowerCase();

    if (answer === "") {
      alert("You have to type something!");
    } else if (answer === "let") {
      alert("Right answer!");
      points += 1;
      console.log("Points: " + points);
      setPoints(points);
    } else {
      alert("Wrong answer! It's the let variable!");
      //   points -= 1;
      console.log("Points: " + points);
    }
  }
  let totalPoints = points;
  localStorage.setItem("points", totalPoints);

  return (
    <div className="container">
      <h2>Variables: </h2>

      <label htmlFor="">
        <p>The scope of a "var" variable is...</p>
      </label>
      <input type="text" name="answer" ref={inputRefA} />
      <button onClick={handleClickA}>Try it!</button>
      <label htmlFor="">
        <p>The scope of a "let" or "const" variable is...</p>
      </label>
      <input type="text" name="answer" ref={inputRefB} />
      <button onClick={handleClickB}>Try it!</button>
      <label htmlFor="">
        <p>
          Can "let" or "const" variables declared inside a curly brackets be
          accessed from outside the block?
        </p>
      </label>
      <input type="text" name="answer" ref={inputRefC} />
      <button onClick={handleClickC}>Try it!</button>
      <label htmlFor="">
        <p>
          What type of variable can be updated, but can't be re-declared into
          the scope?
        </p>
      </label>
      <input type="text" name="answer" ref={inputRefD} />
      <button onClick={handleClickD}>Try it!</button>

      <h1>Points: {points}</h1>
    </div>
  );
};

export default Variables;

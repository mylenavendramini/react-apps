// import { useState, useEffect } from "react";

// const NewFetchData = () => {
//   //   const [id, setId] = useState();

//   //   const [userData2, setUserData2] = useState({});

//   //   function idHandler(e) {
//   //     setId(e.target.value);
//   //     console.log(e.target.value);
//   //   }
//   //   let newId;
//   //   function clickHandler() {
//   //     console.log(id);
//   //     newId = id;
//   //     console.log(newId);
//   //   }
//   //   console.log(newId);

//   //   useEffect(() => {
//   //     fetch(`https://jsonplaceholder.typicode.com/users/${newId}`, {
//   //       method: "GET",
//   //     })
//   //       .then((res) => res.json())
//   //       .then((data) => setUserData2(data))
//   //       .catch((err) => console.log(`error: ${err}`));
//   //   }, []);
//   const [userData, setUserData] = useState({});
//   const url = `https://jsonplaceholder.typicode.com/users`;

//   useEffect(() => {
//     fetch(url, { method: "GET" })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setUserData(data);
//         const user = data.map((user) => user.name);
//         console.log(user);
//       })
//       .catch((err) => console.log(`error: ${err}`));
//   }, []);

//   // No need to touch code below
//   return (
//     <div className="container">
//       <h2>New User Data</h2>
//       {/*<input
//         type="text"
//         value={id}
//         placeholder="Type a number between 1 and 9"
//         onChange={idHandler}
//       />
//       <button onClick={clickHandler}>Look for user</button>
//   <p>{userData2.name}</p>*/}
//       <p>{userData.name}</p>
//     </div>
//   );
// };

// export default NewFetchData;

// // Explain useEffect()

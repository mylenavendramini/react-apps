import { useState, useEffect } from "react";

const FetchData = () => {
  const url = `https://jsonplaceholder.typicode.com/users/1`;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log(`error: ${err}`));
  }, []);

  // No need to touch code below
  return (
    <div className="container">
      <h2>User Data</h2>

      <p>
        <strong>Name: </strong> {userData.name || "Name"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "Website"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "Email"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "Phone number"}
      </p>
    </div>
  );
};

export default FetchData;

// Explain useEffect()

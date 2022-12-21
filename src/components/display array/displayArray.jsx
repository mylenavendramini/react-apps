const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

function DisplayArray() {
  return (
    <div className="container">
      <h3>User names</h3>
      {users.map((user) => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default DisplayArray;

// Why is important to give a key?
// Why use map and not forEach?

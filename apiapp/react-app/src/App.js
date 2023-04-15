import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // https://reqres.in/api/users?page=1
  // https://api.github.com/users

  const [users, setUsers] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const getUser = async () => {
    setShowSpinner(true);
    const res = await axios.get("https://reqres.in/api/users?page=1");

    console.log(res); //get response of API in console
    const userData = res.data.data;
    setUsers(userData);
  };
  return (
    <div id="users">
      <nav>
        <div class="company-name">
          <a href="#">HRS</a>
        </div>
        <div class="nav-buttons">
          <button onClick={getUser}>Get User</button>
        </div>
      </nav>
      <div class="container">
        {users.map((user) => (
          <div key={user.id} class="card">
            <img src={user.avatar} alt="Image" />
            <div class="details">
              <h2>
                {user.first_name} {user.last_name}
              </h2>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;

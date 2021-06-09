import { useState } from "react";
import "./register.css";

const Register = ({ changeRoute, setUserProfile }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameRegister = (event) => {
    setName(event.target.value);
  };

  const handleEmailRegister = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordRegister = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisterSubmit = () => {
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          setUserProfile(user);
          changeRoute("home");
        } else {
          alert("Failed to register user!");
        }
      })
      .catch(console.log);
  };

  return (
    <div>
      <h2>Fill in your credentials👇</h2>
      <form>
        <label>Name: </label>
        <input type="text" onChange={handleNameRegister} />
        <br />

        <label>Email: </label>
        <input type="email" onChange={handleEmailRegister} />
        <br />

        <label>password: </label>
        <input type="password" onChange={handlePasswordRegister} />
        <br />

        <input type="button" value="register" onClick={handleRegisterSubmit} />
        <br />
        <input
          type="button"
          value="signin"
          onClick={() => changeRoute("signin")}
        />
      </form>
    </div>
  );
};

export default Register;

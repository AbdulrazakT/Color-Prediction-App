import { useState } from "react";
import "./Signin.css";

const Signin = ({ changeRoute, setUserProfile }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSigninEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSigninPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSigninSubmit = () => {
    fetch("http://localhost:8000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          setUserProfile(user);
          changeRoute("home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin">
      <h1>Color Prediction App🔮</h1>
      <hr />
      <br />
      <form>
        <label>Email: </label>
        <input type="email" onChange={handleSigninEmail} />
        <br />

        <label>Password: </label>
        <input type="password" onChange={handleSigninPassword} />
        <br />

        <input type="button" value="Sign in" onClick={handleSigninSubmit} />
        <br />
        <input
          type="button"
          value="register"
          onClick={() => changeRoute("register")}
        />
      </form>
    </div>
  );
};

export default Signin;

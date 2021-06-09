import "./App.css";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [route, setRoute] = useState("signin");
  const [userProfile, setUserProfile] = useState({
    id: "",
    name: "",
    email: "",
    entries: "",
    joined: "",
  });

  const handleRouteChange = (route_change) => {
    setRoute(route_change);
  };

  const loadUserProfile = (user) => {
    setUserProfile({
      id: user.id,
      name: user.name,
      email: user.email,
      joined: user.joined,
      entries: user.entries,
    });
  };

  return (
    <div className="App">
      {route === "signin" ? (
        <Signin
          changeRoute={handleRouteChange}
          setUserProfile={loadUserProfile}
        />
      ) : route === "register" ? (
        <Register
          changeRoute={handleRouteChange}
          setUserProfile={loadUserProfile}
        />
      ) : (
        <Home
          changeRoute={handleRouteChange}
          user_name={userProfile.name}
          user_id={userProfile.id}
          user_entries={userProfile.entries}
        />
      )}
    </div>
  );
}

export default App;

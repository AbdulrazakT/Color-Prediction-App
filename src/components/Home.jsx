import "./home.css";
import { useState } from "react";
import PredictedColors from "./PredictedColors";
import Entries from "./Entries";

const Home = ({ user_name, changeRoute, user_id, user_entries }) => {
  const [url, setUrl] = useState("");
  const [predictedColors, setPredictedColors] = useState([]);
  const [enrtries, setEnrtries] = useState(user_entries);

  const handleImageUrl = (event) => {
    setUrl(event.target.value);
  };

  const updateEntries = () => {
    fetch("http://localhost:8000/entry", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: user_id }),
    })
      .then((response) => response.json())
      .then((entry) => setEnrtries(entry))
      .catch((err) => console.log("Something wrong!"));
  };

  const handleSubmit = () => {
    fetch("http://localhost:8000/home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url }),
    })
      .then((response) => response.json())
      .then((colors) => {
        if (colors) {
          updateEntries();
          setPredictedColors(colors);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <h3>Hello {user_name}, Welcome!</h3>
      <hr />
      <br />

      <p>Insert an image url and let us predict the colors on the image😊</p>

      <label>Image URL: </label>
      <input type="text" onChange={handleImageUrl} />
      <br />

      <input type="button" value="Predict" onClick={handleSubmit} />
      <br />
      <br />

      {enrtries && <Entries entries={enrtries} />}

      <h2>The Image URL:</h2>
      <a href={url}>{url}</a>

      <h2>The Image:</h2>
      {url && <img src={url} alt="prediction" width="200" height="200" />}

      <h2>Predicted Colors: </h2>
      <PredictedColors colors={predictedColors} />

      <input
        type="button"
        value="signout"
        onClick={() => changeRoute("signin")}
      />
    </div>
  );
};

export default Home;

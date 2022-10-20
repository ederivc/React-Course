import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./main.css";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const json = await response.json();
    setCharacters(json.results);
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {characters.map(
        ({ id, image, name, status, species, origin, location }) => (
          <Card
            key={id}
            image={image}
            name={name}
            status={status}
            species={species}
            location={location.name}
            origin={origin.name}
          />
        )
      )}
    </div>
  );
};

export default App;

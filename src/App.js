import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

const App = (_) => {
  const [name, setName] = useState(null);
  const [nameAxios, setNameAxios] = useState([]);

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
      setNameAxios(res.data.name);
    });

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((res) => setName(res.name));
  }, []);
  return (
    <div className='forms'>
      <h1>Formas GET para una API</h1>
      <p>Fetch: {name}</p>
      <p>Axios: {nameAxios}</p>
    </div>
  );
};
export default App;

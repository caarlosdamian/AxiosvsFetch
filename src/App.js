import "./App.css";
import { useEffect, useState } from "react";

const App = (_) => {
  const [name, setname] = useState(null);
  

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json().then(console.log(res)))
      .then((res) => setname(res.name));
  }, []);
  return <p>{name}</p>;
};
export default App;

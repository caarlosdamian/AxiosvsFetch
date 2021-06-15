# Fetch API y Axios

Please before run 

```
npm install 
```
Then you can run 
```
npm start
```
## Using the fetch API

The Fetch API provides a JavaScript interface for managing HTTP requests and responses. It also provides a global method fetch() which provides an easy and logical way to get resources asynchronously across the network.

```JavaScript
import {useEffect} from 'react';

const App = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json()) 
    .then(res => setName(res.name)); 
  }, []); 
  return <p>{name}</p>;
}
```

## Using the Axios API

Axios is a JavaScript library that can be executed in the browser and that allows us to make simple operations as an HTTP client, so we can configure and make requests to a server and receive responses that are easy to process.


```Javascript
import { useState, useEffect } from "react";
import axios from "axios";

const App = (_) => {
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((res) => {
        setName(res.data.name);
      })
  }, []);

  return <div>{name}</div>;
};
export default App;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

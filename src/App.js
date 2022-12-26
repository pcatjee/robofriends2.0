//Robo Friends App but using fetch API

import "./App.css";
import Header from "./Header";
import Cardlist from "./Cardlist";
import { useState, useEffect } from "react";

function App() {
  const [searchfield, setSearchfield] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const extraction = data.filter((curElem) => {
    return curElem.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  console.log(extraction);
  return (
    <div className="App">
      <Header searchChange={onSearchChange} />
      <div>
        <Cardlist robotsData={extraction} />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  const [data, setData] = useState([]);
  const getRepo = () => {
    axios.get("/.netlify/functions/api").then((response) => {
      console.log(response);
      const myRepo = response.data;
      setData(myRepo);
    });
  };
  console.log(data);

  useEffect(() => getRepo(), []);
  return (
    <div className="app">
      <header className="header">ALL FUNDS</header>
      <CardList />
      <h1>holaaa</h1>
    </div>
  );
}

export default App;

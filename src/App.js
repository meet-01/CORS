import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  const [data, setData] = useState([]);

  // const getRepo = async () => {
  //   const response = await fetch(
  //     "https://prr7fx7sh0.execute-api.ap-south-1.amazonaws.com/dev/pten/funds"
  //   );
  //   const data = await response.json();
  //   setData(data);
  //   return data;
  // };
  // console.log(data);
  const getRepo = () => {
    axios
      .get(
        "https://prr7fx7sh0.execute-api.ap-south-1.amazonaws.com/dev/pten/funds"
      )
      .then((response) => {
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
      <h1>hola</h1>
    </div>
  );
}

export default App;

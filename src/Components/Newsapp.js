import React, { useEffect, useState } from "react";
import Card from "./Card"; // make sure this path is correct

const Newsapp = () => {
  const [search, setSearch] = useState("Information Technology");
  const API_KEY = "fd8a2d95936e4511b42e2a5ddac58258";
  const [newsData, setNewsData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles); // display fetched data
    let dt = jsonData.articles.slice(0, 10);
    setNewsData(dt);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    console.log("Selected:", e.target.value);
  };
  const userInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Skill Quest</h1>
        </div>

        <div className="sections">
          <h3>Tech Zone</h3>
        </div>

        <div className="dropdown">
          <label htmlFor="domain">Choose a Domain: </label>
          <select id="domain" name="domain" onChange={handleInput}>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Artificial Intelligence">AI/ML</option>
            <option value="Web Development">Web Development</option>
            <option value="Software Development">Software Development</option>
            <option value="Game Development">Game Development</option>
          </select>
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;

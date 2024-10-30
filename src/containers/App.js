import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "../index.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monstors, setMonstors] = useState([]);
  const [filteredMonstors, setFilteredMonstors] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonstors(users));
  }, []);

  useEffect(() => {
    const filteredMonstors = monstors.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonstors(filteredMonstors);
  }, [monstors, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="tc">
      <h1 className="title">Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />

      <CardList robots={filteredMonstors} />
    </div>
  );
};

export default App;

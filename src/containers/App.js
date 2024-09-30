import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "../index.css";
import { Scroll } from "../components/Scroll";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  onSearchChange(event) {
    const { value } = event.target;

    this.setState({ searchField: value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="tc">
        <h1 className="title">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange.bind(this)} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
        <div className="App">
            <h1>Monsters</h1>
            <SearchBox
                className='search'
                placeholder='Search Monsters'
                handleChange={this.handleChange}
            />

          <CardList monsters={filteredMonsters}>
          </CardList>
        </div>
    );
  }

  handleChange = e => {
      this.setState({searchField: e.target.value});
  }
}

export default App;

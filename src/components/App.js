import React, { Component } from 'react';
import '../styles/App.css';


//import components
import CreateTodo from '../containers/CreateTodo';
import ToggleFilters from '../containers/ToggleFilters';
import FilteredTodos from '../containers/FilteredTodos';


class App extends Component {
  render() {
    return (
      <div className="App">
        SUPER DUPER FANCY TODO APP
        <CreateTodo />
        <ToggleFilters />
        <FilteredTodos />
      </div>
    );
  }
}

export default App;

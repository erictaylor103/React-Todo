import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


const itemList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Buy Milk",
    id: 1235,
    completed: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      itemList: itemList

    };
  }

  // Class methods to update state
  addItem = itemName => {
    
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      itemList: [...this.state.itemList, newItem]
    });
  };

  toggleItem = () =>{
    
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To-Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList itemList={this.state.itemList} />
      </div>
    );
  }
}

export default App;
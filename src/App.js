import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.css";


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

  toggleItem = clickedId => {
    const newitemList = this.state.itemList.map(item => {
      if(item.id === clickedId){
        return{
          ...item,
          completed: !item.completed
        };
      }else{
        return item;
      }
    });

    //update state with the new array
    this.setState({
      itemList: newitemList
    });
  };
  //filter out the items that are not completed(false) and set the itemList state to the items 
  //that are not completed(false)
  clearTodo = e => {
    e.preventDefault();
    const completedItemList = this.state.itemList.filter(item => !item.completed);
		this.setState({
      itemList: completedItemList 
    });console.log(completedItemList);
    
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To-Do List</h1>
          <TodoForm 
          addItem={this.addItem} 
          />
        </div>
        <TodoList 
        itemList={this.state.itemList} 
        toggleItem={this.toggleItem}
        clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
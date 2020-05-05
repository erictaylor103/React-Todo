import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  
  return (
    <div className="shopping-list">
      {props.itemList.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearTodo}>
        Clear ToDo
      </button>
    </div>
  );
};

export default TodoList;

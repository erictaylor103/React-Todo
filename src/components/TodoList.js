// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './components/Todo'


const TodoList = props => {
    return(
        <div>
            {props.list.map(item =>(
                <Item key={item.id} item={item} />
            ))}
            <button>Clear Item</button>
        </div>
    )
}

export default TodoList;
import React from 'react';

class TodoForm extends React.Component {
    //created a constructor with the state of the "keyword"
    constructor(){
        super();
        this.state ={
            keyword: ""
        }
    }

    


    render(){
        return(
            <form>
                <input></input>
                <button>Add To-Do</button>
                <button>Clear Purchased</button>
            </form>
        )
    }
}

export default TodoForm;

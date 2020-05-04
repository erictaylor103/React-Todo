import React from 'react';

class TodoForm extends React.Component {
    
    //created a constructor with the state of the "keyword"
    constructor(){
        super();
        this.state ={
            keyword: ""
        }
    }

    //created a handleChanges function that takes the event and updates the "keyword" state with each keystroke
    handleChanges = e => {
        this.setState(
            {
                keyword: e.target.value
            },
            console.log(this.state.keyword)
            )
    }




    render(){
        return(
            <form>
                
                <input
                onChange={this.handleChanges}
                type="text"
                name="item"
                value={this.state.keyword}           
                />

                <button>Add To-Do</button>
                <button>Clear Purchased</button>

            </form>
        )
    }
}

export default TodoForm;

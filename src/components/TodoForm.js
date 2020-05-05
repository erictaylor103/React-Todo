import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      keyword: "",
    };
  }

  handleChanges = e => {
    // update state with each keystroke (this.setState)
    this.setState(
      {
        keyword: e.target.value
      },
      // add a second argument if you want to run a function _after_ state is updated
      () => console.log(this.state.keyword)
    );
    // console.log(this.state.keyword);
  };

  // class property to submit form
  submitForm = e => {
    e.preventDefault();
    this.props.addItem(this.state.keyword);
    this.setState({
      keyword: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          onChange={this.handleChanges}
          type="text"
          name="item"
          value={this.state.keyword}
        />
        <button>Add</button>
        
      </form>
    );
  }
}

export default ListForm;

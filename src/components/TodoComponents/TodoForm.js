import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
  }


  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
  };

  render() {
    console.log(this.props.clearTask)
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          value={this.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
        <button onClick={this.props.clearTask}>Done</button>
      </form>
    );
  }
}

export default TodoForm;

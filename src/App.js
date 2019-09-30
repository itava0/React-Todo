import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const task = [
  {
    task: "Forum App",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Movie Reviews App",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      task: task
    };
  }
  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      task: [...this.state.task, newTask]
    });
  };

  clearTask = () => {
    this.setState({
      task: this.state.task.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList task={this.state.task} clearTask={this.clearTask}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;

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

  toggleTask = id => {
    this.setState({
      task: this.state.task.map(item => { // loop throught the array, and find which element we clecked update the "completed" props
        if (item.id === id) {
          return {
            ...item,
            completed: !item.purchased
          };
        } else {
          return item;
        }
      })
    });
  };

  addTask = taskName => { // creastes a new task and added to the end of the array
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      task: [...this.state.task, newTask]
    });
  };

  clearTask = () => {// filter out the task that are completed 
    this.setState({
      task: this.state.task.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList task={this.state.task} toggleTask={this.toggleTask}/>
        <TodoForm addTask={this.addTask} clearTask={this.clearTask} />
      </div>
    );
  }
}

export default App;

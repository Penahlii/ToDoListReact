import { Component } from "react";

class ToDo extends Component {
  state = {
    tasks: [],
    newTask: "",
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = (e) => {
    e.preventDefault();
    if (this.state.newTask.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.newTask],
        newTask: "",
      }));
    }
  };

  deleteTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <form onSubmit={this.addTask}>
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
            placeholder="Enter a new Task"
          />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;

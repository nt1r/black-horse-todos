import React from 'react';
import Manager from '../model/Manager';
import TodoController from '../controller/TodoController';

class Homepage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.manager = new Manager();
    this.controller = new TodoController(this.manager);

    this.state = {
      inputText: '',
      todos: this.manager.todoList,
    };
  }

  componentDidMount() {
  }

  render() {
    const onInputChange = (event) => {
      this.setState({
        inputText: event.target.value,
      });
    };

    const onInputKeyPress = (event) => {
      if (event.key === 'Enter') {
        const { inputText } = this.state;
        this.controller.addNewTodo(inputText);

        this.setState({
          todos: this.manager.todoList,
        });

        const { todos } = this.state;
        console.log(todos);
      }
    };

    const { inputText } = this.state;

    return (
      <section className="app">
        <header>
          <h1 className="app_title">todos</h1>
        </header>
        <input
          className="todo_input"
          type="text"
          value={inputText}
          placeholder="What needs to be done?"
          onChange={onInputChange}
          onKeyPress={onInputKeyPress}
        />
      </section>
    );
  }
}

export default Homepage;

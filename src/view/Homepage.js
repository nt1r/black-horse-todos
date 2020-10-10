import React from 'react';
import TodoManager from '../model/TodoManager';
import TodoController from '../controller/TodoController';

class Homepage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.manager = new TodoManager();
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
          inputText: '',
          todos: this.manager.todoList,
        });

        const { todos } = this.state;
        console.log(todos);
      }
    };

    const onCheckboxChange = (event) => {
      console.log(event.target.checked);
    };

    const onClickAllFilter = () => {
      console.log('All');
    };

    const onClickActiveFilter = () => {
      console.log('Active');
    };

    const onClickCompletedFilter = () => {
      console.log('Completed');
    };

    const { inputText, todos } = this.state;

    return (
      <section className="app">
        <header>
          <h1 className="app-title">todos</h1>
        </header>
        <input
          className="todo-input"
          type="text"
          value={inputText}
          placeholder="What needs to be done?"
          onChange={onInputChange}
          onKeyPress={onInputKeyPress}
        />
        {
          todos.length > 0 ? (
            <div className="todos-div">
              {
                todos.map((todo) => (
                  <div className="todo-content" key={todo.id}>
                    <label className="checkbox-label" htmlFor={`checkbox${todo.id}`}>
                      <input className="checkbox" type="checkbox" id={`checkbox${todo.id}`} onChange={onCheckboxChange} />
                      <span className="checkbox-span" />
                      {todo.content}
                    </label>
                    <button className="checkbox-delete-button" type="button"> </button>
                  </div>
                ))
              }
              <div className="filter-div">
                <span className="count-span">
                  {todos.length}
                  {' '}
                  {
                    todos.length > 1 ? 'items ' : 'item '
                  }
                  left
                </span>
                <ul className="filter-ul">
                  <li className="filter-li"><button className="filter-button" type="button" onClick={onClickAllFilter}>All</button></li>
                  <li className="filter-li"><button className="filter-button" type="button" onClick={onClickActiveFilter}>Active</button></li>
                  <li className="filter-li"><button className="filter-button" type="button" onClick={onClickCompletedFilter}>Completed</button></li>
                </ul>
              </div>
              <div className="todo-content-fade1" />
              <div className="todo-content-fade2" />
            </div>
          )
            : (
              <div className="todo-content" key="no-content">
                <span className="no-content-placeholder">No contents yet.</span>
              </div>
            )
        }
      </section>
    );
  }
}

export default Homepage;

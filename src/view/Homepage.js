import React from 'react';
import {
  Link,
} from 'react-router-dom';

import TodoManager from '../model/TodoManager.ts';
import TodoController from '../controller/TodoController.ts';
import TodoLocalStorage from '../storage/TodoLocalStorage.ts';
import { parseFilterFromUrl } from '../utils/UrlUtil.ts';
import { TodoFilter } from '../constant/TodoFilter.ts';

class Homepage extends React.Component {
  constructor(props, context) {
    super(props, context);

    const storage = new TodoLocalStorage();
    this.manager = new TodoManager(storage);
    this.controller = new TodoController(this.manager);

    this.state = {
      inputText: '',
      todos: this.manager.filteredTodoList,
    };
  }

  componentDidMount() {
    this.controller.filterTodos(parseFilterFromUrl(window.location.hash));
    this.setState({
      todos: this.manager.filteredTodoList,
    });
  }

  render() {
    const updateTodos = () => {
      this.setState({
        todos: this.manager.filteredTodoList,
      });
    };

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
          todos: this.manager.filteredTodoList,
        });
      }
    };

    const onCheckboxChange = (event, todoId) => {
      this.controller.setCompletedStatusById(todoId, event.target.checked);
      updateTodos();
    };

    const onClickAllFilter = () => {
      this.controller.filterTodos(TodoFilter.all);
      updateTodos();
    };

    const onClickActiveFilter = () => {
      this.controller.filterTodos(TodoFilter.active);
      updateTodos();
    };

    const onClickCompletedFilter = () => {
      this.controller.filterTodos(TodoFilter.completed);
      updateTodos();
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
                        <input
                          className="checkbox"
                          type="checkbox"
                          id={`checkbox${todo.id}`}
                          checked={todo.isCompleted}
                          onChange={(event) => onCheckboxChange(event, todo.id)}
                        />
                        <span className="checkbox-span" />
                        {
                          todo.isCompleted ? <span className="todo-content-span-completed">{todo.content}</span>
                            : <span>{todo.content}</span>
                        }
                      </label>
                      <button className="checkbox-delete-button" type="button">{}</button>
                    </div>
                  ))
                }
            </div>
          )
            : (
              <div className="todo-content" key="no-content">
                <span className="no-content-placeholder">No contents yet.</span>
              </div>
            )
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
            <li className="filter-li">
              <Link className="filter-link" onClick={onClickAllFilter} to="/#/">All</Link>
            </li>
            <li className="filter-li">
              <Link
                className="filter-link"
                type="button"
                onClick={onClickActiveFilter}
                to="/#/active"
              >
                Active
              </Link>
            </li>
            <li className="filter-li">
              <Link
                className="filter-link"
                type="button"
                onClick={onClickCompletedFilter}
                to="/#/completed"
              >
                Completed
              </Link>
            </li>
          </ul>
        </div>
        <div className="todo-content-fade1" />
        <div className="todo-content-fade2" />
      </section>
    );
  }
}

export default Homepage;

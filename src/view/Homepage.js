import React from 'react';

class Homepage extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <section className="app">
        <header>
          <h1 className="app_title">todos</h1>
        </header>
        <input className="todo_input" type="text" placeholder="What needs to be done?" />
      </section>
    );
  }
}

export default Homepage;

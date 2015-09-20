'use strict';

import React from 'react/addons';
import DeleteTodo from '../../todo/Commands'

export default class TodoList extends React.Component {

  static contextTypes = {
    viewRegister: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    this.unsubscribe = this.context.viewRegister.subscribe("todosView", state => {
      this.setState({
        todos: state
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    const onDelete = (todo) => {
      console.log("delete");
    };

    const todos = this.state.todos;

    return (
      <div>
        {todos.length === 0 && (<h4>Nothing in the list ! Try adding some elements using the form below.</h4>)}
        {todos.map((todo) =>
            <p>
              <button className="btn btn-default btn-sm" onClick={onDelete.bind(this, todo)}>Done</button>
              {todo.label()}</p>
        )}
      </div>
    );
  }

}

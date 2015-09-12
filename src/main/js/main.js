'use strict';

import {EventBus, CommandBus, createView} from 'cqrs4js';
import React from 'react';
import { Component, PropTypes} from 'react';
import {TodoAdded} from "./todo/Events";
import {createTodosView} from "./todo/TodosView";
import {createTodoModel} from "./todo/TodoModel";
import Immutable from "Immutable";
import createProvider from "./reactcqrs4js/ContextFactory";


const appNode = document.getElementById("app");

const eventBus = new EventBus();
const commandBus = new CommandBus();
const todosViewSubscriber = createTodosView(eventBus);
createTodoModel(commandBus, eventBus, Immutable.List(["foo"]));

const Provider = createProvider(React);
const App = React.createClass({
  render: function () {
    return (
        <div>
          Hello world at last
        </div>
    );
  }
});

React.render(
  <Provider commandBus={commandBus}
            eventBus={eventBus}>
    {() => <App />}
  </Provider>,
  appNode
);

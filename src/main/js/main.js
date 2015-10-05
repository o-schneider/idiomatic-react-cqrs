'use strict';

import React,  { Component, PropTypes} from 'react';
import Router, { Route, DefaultRoute, RouteHandler } from 'react-router';

import {EventBus, CommandBus, createView} from 'cqrs4js';

import {TodoAdded} from "./todo/Events";
import {createTodosView} from "./todo/TodosView";
import {createTodoModel} from "./todo/TodoModel";
import createProvider from "./reactcqrs4js/ContextFactory";
import ViewRegister from "./reactcqrs4js/ViewRegister";

import HomeUi from './ui/Home';
import TodosUi from './ui/Todo/Todos';
import UiNavbar from './ui/Navbar';

const eventBus = new EventBus();
const commandBus = new CommandBus();
const viewRegister = new ViewRegister();

viewRegister.register('todosView', createTodosView(eventBus));

createTodoModel(commandBus, eventBus);

const Provider = createProvider(React);

const App = React.createClass({
  render: function () {
    return (
      <div className='main container'>
        <UiNavbar />
        <RouteHandler />
      </div>
    );
  }
});

const Routes = (
  <Route name="home" path="/" handler={App}>
    <DefaultRoute handler={HomeUi}/>
    <Route name="rest" path="/rest" handler={TodosUi}/>
  </Route>
);

Router.run(Routes, function (RouteHandler) {
  React.render(<Provider eventBus={eventBus}
                         commandBus={commandBus}
                         viewRegister={viewRegister}
    >
    {() => <RouteHandler />}</Provider>, document.getElementById("app"));
});

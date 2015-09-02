'use strict';

import {EventBus, CommandBus, createView} from 'cqrs4js';
import {React, Component, PropTypes} from 'react';
import {TodoAdded} from "./todo/TodoAdded";
import {createTodosView} from "./todo/TodosView";

require('../less/main.less');

const appNode = document.getElementById("app");

class Provider extends Component {
  static childContextTypes() {
    return {
      commandBus: PropTypes.object.isRequired,
      eventBus: PropTypes.object.isRequired,
      views: PropTypes.array.isRequired,
      models: PropTypes.array.isRequired
    };
  }
}

const ContextFactory = (propTypes) => {

  return class FactoriedContext {

    static childContextTypes() {return propTypes;}
    static propTypes() {return propTypes;}

    getChildContext() {
      const res = {};
      const types = FactoriedContext.propTypes();
      for(let propname in types) { if(types.hasOwnProperty(propname)) res[propname] = types[propname]; }
      return res;
    }

    render() { return this.props.render(); }
  };

};

// Declaring our App Context
const Context = ContextFactory({
  eventBus: React.PropTypes.object.isRequired,
  commandBus: React.PropTypes.object.isRequired
});

const eventBus = new EventBus();
const commandBus = new CommandBus();
const eventsViewSubscriber =  createTodosView(eventBus);

const App = React.createClass({
  render: function () {
    return (
  <div>Hello world</div>
    );
  }
});

React.render(
  (<Context
      eventBus={eventBus}
      commandBus={commandBus}
      render={() => <App/>} />
  )
  , appNode);



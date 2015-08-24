'use strict';

import React from 'react';
import {EventBus} from 'cqrs4js';
import {CommandBus} from 'cqrs4js';

require('../less/main.less');

const appNode = document.getElementById("app");


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



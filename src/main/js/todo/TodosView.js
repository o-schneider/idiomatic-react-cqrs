'use strict';

import Immutable from 'immutable';
import {createView} from 'cqrs4js';
import {TodoAdded} from "./TodoAdded";

export const createTodosView = (eventBus) => {
  console.log("createView '", createView , "'");
  const viewSubscriber = createView(eventBus, Immutable.List(),
    {
      'name': TodoAdded.eventName(),
      'action': (event, state) => {
        return state.push(event.getTodo());
      }
    }
  );
  return (cbk) => viewSubscriber(cbk);
};
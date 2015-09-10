'use strict';

import Immutable from 'immutable';
import {createView} from 'cqrs4js';
import {TodoAdded} from "./Events";

export const createTodosView = (eventBus) => {
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
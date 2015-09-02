'use strict';

import Immutable from 'immutable';
import {createView} from 'cqrs4js';

export function createTodosView(eventBus) {
  return createView(eventBus, Immutable.List(),
    {
      'name': TodoAdded.name(),
      'action': (event, state) => {
        return state.push(event.getTodo());
      }
    }
  )
};
'use strict';

import {createModel} from 'cqrs4js';
import {AddTodo,DeleteTodo} from './Commands';
import {TodoAdded, TodoAddFailed, TodoDeleted, TodoDeletionFailed} from './Events';
import Immutable from 'immutable';

export const createTodoModel = (commandBus, eventBus) => {
    createModel(commandBus, eventBus, {'bannedWords': Immutable.List.of("foo"), 'todoIds': Immutable.List.of()},
      {
        'name': AddTodo.commandName(),
        'action': (command, state) => {
          console.log("AddTodo received " + state.bannedWords);

          const words = command.payload.split(' ');
          for (var i = 0; i < words.length; i++) {
            const word = words[i];
            if (state.bannedWords.includes(word)) {
              console.log("AddTodo received containing some banned word");
              eventBus.publish(new TodoAddFailed("Banned words contained"));
              return state;

            }
          }
          const todoAdded = new TodoAdded(command.payload);
          eventBus.publish(todoAdded);
          return {'bannedWords': state.bannedWords, 'todoIds': state.todoIds.push(todoAdded.getTodo().id)};
        }
      },
      {
        'name': DeleteTodo.commandName(),
        'action': (command, state) => {
          console.log("DeleteTododTodo received");

          const index = state.todoIds.indexOf(command.payload.id);
          if (index == -1) {
            eventBus.publish(new TodoDeletionFailed("Unknown todo"));
            return state;
          }
          eventBus.publish(new TodoDeleted(command.payload));
          return {'bannedWords': state.bannedWords, 'todoIds': state.todoIds.splice(index, 1)};
        }
      }
    )
    ;

  }
  ;
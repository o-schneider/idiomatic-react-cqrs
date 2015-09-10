'use strict';

import {createModel} from 'cqrs4js';
import {AddTodo} from './Commands';
import {TodoAdded, TodoAddFailed} from './Events';

export const createTodoModel = (commandBus, eventBus, bannedWords) => {
  createModel(commandBus, eventBus, bannedWords,
    {
      'name': AddTodo.commandName(),
      'action': (command, bannedWords) => {
        const words = command.payload.split(' ');
        let valid = true;
        words.forEach(word => {
          if (bannedWords.includes(word)) {
            valid = false;
          }

        });
        if (!valid) {
          eventBus.publish(new TodoAddFailed("Banned words contained"));
        } else {
          eventBus.publish(new TodoAdded(command.payload));
        }

        return bannedWords;
      }
    }
  );
  return ;
};
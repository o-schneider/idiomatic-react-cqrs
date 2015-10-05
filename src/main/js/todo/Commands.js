'use strict';

import {Command} from 'cqrs4js';

export class AddTodo extends Command {

  constructor(text) {
    super(AddTodo.commandName(), text);
  }

  static commandName() {
    return "AddTodo";
  }
}

export class DeleteTodo extends Command {

  constructor(todo) {
    super(DeleteTodo.commandName(), todo);
  }

  static commandName() {
    return "DeleteTodo";
  }
}


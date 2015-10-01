'use strict';

import {Command} from 'cqrs4js';

export class AddTodo extends Command {

  constructor(content) {
    super(AddTodo.commandName(), content);
  }

  static commandName(){
    return "AddTodo";
  }
}



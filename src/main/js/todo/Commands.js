'use strict';

import {Command} from 'cqrs4js';

export class AddTodo extends Command {

  constructor(content) {
    super(AddTodo.commandName(), content);
  }

  getTodo(){
    return {id : this.uuid, content: this.payload} ;
  }

  static commandName(){
    return "AddTodo";
  }
}



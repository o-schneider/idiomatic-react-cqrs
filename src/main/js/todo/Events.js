'use strict';

import {Event} from 'cqrs4js';

export class TodoAdded extends Event {

  constructor(content) {
    super(TodoAdded.eventName(), content);
  }

  getTodo(){
    return {id : this.uuid, label: this.payload} ;
  }

  static eventName(){
    return "TodoAdded";
  }
}

export class TodoAddFailed extends Event {

  constructor(content) {
    super(TodoAddFailed.eventName(), content);
  }

  static eventName(){
    return "TodoAddFailed";
  }
}

export class TodoDeleted extends Event {

  constructor(todoId) {
    super(TodoDeleted.eventName(), todoId);
  }

  static eventName(){
    return "TodoDeleted";
  }
}

export class TodoDeletionFailed extends Event {

  constructor(reason) {
    super(TodoDeletionFailed.eventName(), reason);
  }

  static eventName(){
    return "TodoDeletionFailed";
  }
}
'use strict';

import {Event} from 'cqrs4js';

export class TodoAdded extends Event {

  constructor(content) {
    super(TodoAdded.eventName(), content);
  }

  getTodo(){
    return {id : this.uuid, content: this.payload} ;
  }

  static eventName(){
    return "TodoAdded";
  }
}

export class TodoAddFailed extends Event {

  constructor(content) {
    super(TodoAddFailed.eventName(), content);
  }

  getTodo(){
    return {id : this.uuid, content: this.payload} ;
  }

  static eventName(){
    return "TodoAddFailed";
  }
}
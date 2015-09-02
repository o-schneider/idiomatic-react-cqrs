'use strict';

import {Event} from 'cqrs4js';
import * as EventNames from "./EventNames";

export class TodoAdded extends Event {

  constructor(content) {
    super(name(), content);
  }

  getTodo(){
    return {id : this.uuid, content: this.payload} ;
  }

  static name(){
    return "TodoAdded";
  }
}
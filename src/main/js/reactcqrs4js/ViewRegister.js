'use strict';

import Immutable from "Immutable";
import {check} from 'cqrs4js';

export default class ViewRegister {

  constructor() {
  }

  register(name, viewSubscriber) {
    check.notNull({'name': name, 'viewSubscriber': viewSubscriber});
    this.initIfNeeded();
    this.map = this.map.set(name, viewSubscriber);
  }

  subscribe(name, onViewChangedCallback) {
    check.notNull({'name': name, 'onViewChangedCallback': onViewChangedCallback});
    this.initIfNeeded();
    if (this.map.has(name) == false) {
      throw new Error("View '" + name + "' not existing.");
    }
    return this.map.get(name)(onViewChangedCallback);
  }

  // private method - do not use
  initIfNeeded() {
    if (this.map == null) {
      this.map = Immutable.Map();
    }
  }

}
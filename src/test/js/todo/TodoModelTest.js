'use strict';

import {createTodoModel} from "../../../main/js/todo/TodoModel";
import {TodoAdded, TodoAddFailed} from "../../../main/js/todo/Events";
import {AddTodo} from "../../../main/js/todo/Commands";
import Immutable from 'immutable';
import {CommandBus, EventBus } from 'cqrs4js';
import should from 'should';


describe('TodoModel', function () {
  it("fires TodoAdded when content is banned words free", function (done) {
    const commandBus = new CommandBus();
    const eventBus = new EventBus();
    const bannedWords = Immutable.List(["foo"]);
    createTodoModel(commandBus, eventBus, bannedWords);
    const todoContent = "toc";
    eventBus.subscribe(TodoAdded.eventName(), (message) => {
        should.equal(message.payload, todoContent);
        done();
      }
    );
    commandBus.publish(new AddTodo(todoContent));
  });

  it("fires TodoAddFailed when content contains banned words", function (done) {
    const commandBus = new CommandBus();
    const eventBus = new EventBus();
    const bannedWords = Immutable.List(["foo"]);
    createTodoModel(commandBus, eventBus, bannedWords);
    const todoContent = "foo";
    eventBus.subscribe(TodoAddFailed.eventName(), (message) => {
        done();
      }
    );
    commandBus.publish(new AddTodo(todoContent));
  });
});

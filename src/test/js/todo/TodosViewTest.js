'use strict';

import {EventBus} from 'cqrs4js';
import {createTodosView} from "../../../main/js/todo/TodosView";
import {TodoAdded} from "../../../main/js/todo/Events";
import should from 'should';

describe('TodosView', function () {
  it("stores todos created", function (done) {
    const eventBus = new EventBus();
    const todosViewSubscriber = createTodosView(eventBus);
    const todoContent = "foo";
    todosViewSubscriber((state) => {
      if (state.size == 1) {
        const first = state.first();
        console.log("first '", first, "'");
        should.equal(first.content, todoContent);
        done();
      }
    });
    eventBus.publish(new TodoAdded(todoContent));
  });
});

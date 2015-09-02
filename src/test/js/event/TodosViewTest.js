'use strict';

import {EventBus} from 'cqrs4js';
import {createTodosView} from "../../../main/js/todo/TodoAdded";
import should from 'should';


describe('TodosView', function () {
  it("stores todos created", function (done) {
    const eventBus = new EventBus();
    const todosViewSubscriber = createTodosView(eventBus);
    const todoContent = "foo";
    todosViewSubscriber.subscribe((state) => {
      if(state.size() == 1){
        const todo = state.get(0).getTodo();
        should.equal(todo.content, todoContent);
        done();
      }
    });
    eventBus.publish(new TodoAdded(todoContent));

  });
});

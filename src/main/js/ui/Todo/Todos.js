'use strict';

import React from '../../../../../node_modules/react/addons';
import UIPageHeader from '../PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class TodosUi extends React.Component {

    render() {

        return (
            <div>
                <UIPageHeader icon="star" text='Todos' />
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}


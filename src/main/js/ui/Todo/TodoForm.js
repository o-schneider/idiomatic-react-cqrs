'use strict';

import React from 'react/addons';
import AddTodo from '../../todo/Commands'

export default class TodoForm extends React.Component {

    static contextTypes = {
        commandBus: React.PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = { value: '' };
    }

    render() {


        const handleAdd = () => {
            if(this.state.value.trim() === '') { return; }
            commandBus.publish(new AddTodo(this.state.value));
            this.setState({value: ''});
        };

        const handleChange = (e) => this.setState({value: e.target.value});

        return (
            <div>
                <h2>Add a todo</h2>
                <input type="text" value={this.state.value} onChange={handleChange} />
                &nbsp;
                <button className="btn btn-primary" onClick={handleAdd}>Add</button>
            </div>
        );
    }
}

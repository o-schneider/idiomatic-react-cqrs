'use strict';

import React from 'react/addons';
import {AddTodo} from '../../todo/Commands'

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
            const state = this.state.value.trim();
            if(state === '') { return; }
            console.log("state : ", state );
            this.context.commandBus.publish(new AddTodo(state));
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

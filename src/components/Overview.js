import React, { Component } from 'react';

export class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
        }

        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        const input = document.querySelector('input');
        this.setState({
            tasks: this.state.tasks.concat([input.value]),
        })
        input.value = "";
    }

    render() {
        return (
            <div>
                <input></input>
                <button onClick={this.addTask}>Submit</button>
                <ul>
                    {this.state.tasks.map(value => 
                        <li key={value.toString()}>{value}</li>)}
                </ul>
            </div>
        )
    }
}
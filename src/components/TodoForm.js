import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            newActivityName: ""
        };
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({ newActivityName: e.target.value });
        
    };

    submitHandler = e => {
        e.preventDefault();
        if(this.state.newActivityName) {
            this.props.addNewActivity(this.state.newActivityName);
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="activity" value={this.state.newActivityName} onChange={this.changeHandler} />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;
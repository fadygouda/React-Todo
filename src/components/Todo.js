import React from "react"

const ToDo = props => {
    const clickHandler = e => {
        props.toggleCompleted(props.activity.id);

    };
    return (
        <div onClick = {clickHandler}
        className = {`activity${props.activity.completed ? " completed" : ""}`}
        >
            <p>{props.activity.name}</p>
        </div>
    )
}

export default ToDo;
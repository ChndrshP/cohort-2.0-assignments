import React from 'react';

const RenderTodo = ({ todos, toggleComplete}) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    {todo && (
                        <>
                            <h2>{todo.title}</h2>
                            <h3>{todo.description}</h3>
                            <button onClick={() => toggleComplete(todo.index)}>
                                {todo.completed ? "Completed" : "Mark as Complete"}
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RenderTodo;
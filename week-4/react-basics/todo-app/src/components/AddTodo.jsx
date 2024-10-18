import React, {useState} from 'react'

const addTodo = ({addTask}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        if(title && description){
            addTask(title, description);
            setTitle('');
            setDescription('');
        }else{
            alert('Please fill in both fields');
        }
    };

    return (
        <div className='todo-container'>
            <label htmlFor='task-name'>Task</label><br/>
            <input
                type='text'
                id='task-name'
                placeholder='Task Name'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br/><br/>
            <label htmlFor='desc'>Description</label><br/>
            <input
                type='text'
                id='desc'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br /><br />
            <button type='button' onClick={handleAddTask}>
                Add Task
            </button>
        </div>
    );
};

export default addTodo
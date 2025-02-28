import { useState } from "react";
import Task from "./Task";
import TodoTopBar from "./TodoTopBar";

interface TaskProps
{
    text: string;
    isDone: boolean;
}

function TodoList()
{
    const [ tasks, setTasks ] = useState<TaskProps[]>([]);

    const addTask = ( text:string, isDone: boolean ) => { 
        console.log( String(tasks.some( task => task.text === text) ) );
        if (!tasks.some( task => task.text === text )) 
            setTasks( [...tasks, { text: text, isDone: isDone }] )
        };
    const deleteTask = ( text: string ) => {
        setTasks(tasks.filter(task => task.text !== text));
        }
    const toggleIsDone = ( text: string ) => {
        // const isDone = tasks.find( task => task.text === text )?.isDone;
        // deleteTask( text );
        // addTask( text, !isDone );
        const newTasks = [...tasks];
        const task = newTasks.find(
        t => t.text === text
        );
        if (task)
            task.isDone = !task?.isDone;
        setTasks( newTasks );
}


    return (
        <div className="container todo-list">
            <TodoTopBar onAddTask={(text:string)=>{ addTask(text, false );}}/>
            <ul>
                { tasks.map(( (task) => (<li 
                                                className= "list-group-item"
                                                key={task.text} 
                                                onClick={ () => {
                                                            } 
                                                    }>
                                                    <Task text={task.text} isDone={task.isDone} onDeleteTask={deleteTask} onToggleTask={toggleIsDone}/>
                                                </li>)
                                        ))}
            </ul>
        </div>
    );
}

export default TodoList;
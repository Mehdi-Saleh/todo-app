interface TodoTopBarProps
{
    onAddTask: (text:string)=>void;
}

function TodoTopBar( props: TodoTopBarProps )
{
    let currentInput = "";
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement >) => { if (e.target) {currentInput = e.target.value;} };
    const handleAddTask = () => {
        if ( currentInput !== "" )
            props.onAddTask( currentInput );
    }

    return (
        <div className="row todo-top-bar">
            <div className="col">
                <input type="text" className="fill-width" onChange={handleInputChange}/>
            </div>
            <div className="col col-md-auto btn-group task-btn-group" role="group">
                <button type="button" className="btn btn-success" onClick={handleAddTask}>Add</button>
            </div>
        </div>
    );
}

export default TodoTopBar;
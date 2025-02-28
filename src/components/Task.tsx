interface TaskProps
{
    text: string;
    isDone: boolean;
    onDeleteTask: (text:string)=>void;
    onToggleTask: (text:string)=>void;
}

function Task( { text, isDone, onDeleteTask, onToggleTask }: TaskProps )
{
    // const [ _isDone, setIsDone ] = useState( false )

    // const toggleIsDone = () => { setIsDone( !isDone ); };

    return (
        <div className="container task">
            <div className="row">
                <div className="col">
                    <h3> 
                        { isDone ? <s>{text}</s> : text }
                    </h3> 
                </div>
                <div className="col col-md-auto btn-group task-btn-group" role="group">
                    <button type="button" className="btn btn-danger" onClick={()=>onDeleteTask(text)}>delete</button>
                    <button type="button" className="btn btn-success" onClick={()=>onToggleTask(text)}>check</button>
                </div>
            </div>
        </div>
    )
}

export default Task;
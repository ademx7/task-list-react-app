import Task from "./Task";
function TaskList(list) {
    list = [
        {text: "Estudiar React"},
        {text: "Hacer la app de tareas"}
    ];
    return (
       <div>
            <h2>Tareas:</h2>
            <ul>
                {
                   list.map((item) => (
                    <Task key = "" text = {item.text}/>
                    ))}
            </ul>
       </div>
    );
  }
  export default TaskList;
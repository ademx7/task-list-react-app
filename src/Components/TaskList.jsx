import Task from "./Task";


function TaskList() {
    const list = [
        { text: "Estudiar React" },
        { text: "Hacer las compras" },
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
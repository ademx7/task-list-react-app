import useTaskManagement from "../Hooks/useTaskManagment";
import Task from "./Task";
import Btn from "./Btn";

function TaskList() {
  const {
    taskList,
    newTaskText,
    newTaskComment,
    setNewTaskText,
    setNewTaskComment,
    createTask,
    deleteTask,
    updateTask
  } = useTaskManagement();

  const handleTaskCompletion = (index) => {
    const updatedTask = {
      ...taskList[index],
      completed: !taskList[index].completed
    };
    updateTask(index, updatedTask);
  };

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleCommentChange = (event) => {
    setNewTaskComment(event.target.value);
  };

  const handleAddTask = () => {
    createTask();
  };

  const handleDeleteTask = (index) => {
    deleteTask(index);
  };

  return (
    <div>
      <h2>Tareas:</h2>
      <div>
        <input
          type="text"
          value={newTaskText}
          onChange={handleInputChange}
          placeholder="Nueva tarea"
        />
        <input
          type="text"
          value={newTaskComment}
          onChange={handleCommentChange}
          placeholder="Descripción o comentario (Opcional)"
        />
        <Btn onClick={handleAddTask}>Agregar tarea</Btn>
      </div>
      {taskList.map((item, index) => (
        <Task
          key={index}
          text={item.text}
          completed={item.completed}
          comment={item.comment}
          onCompletion={() => handleTaskCompletion(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
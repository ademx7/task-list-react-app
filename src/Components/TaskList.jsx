import { useState, useEffect } from "react";
import Task from "./Task";

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskComment, setNewTaskComment] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  const handleTaskCompletion = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].completed = !updatedTaskList[index].completed;
    setTaskList(updatedTaskList);
    updateLocalStorage(updatedTaskList);
  };

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleCommentChange = (event) => {
    setNewTaskComment(event.target.value);
  };

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      const newTask = {
        text: newTaskText,
        completed: false,
        comment: newTaskComment
      };
      setTaskList([...taskList, newTask]);
      setNewTaskText("");
      setNewTaskComment("");
      updateLocalStorage([...taskList, newTask]);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, taskIndex) => taskIndex !== index);
    setTaskList(updatedTaskList);
    updateLocalStorage(updatedTaskList);
  };

  const updateLocalStorage = (updatedTaskList) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
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
        <button onClick={handleAddTask}>Agregar tarea</button>
     </div>
      <ul>
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
      </ul>
    </div>
  );
}

export default TaskList;
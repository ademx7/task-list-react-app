import { useState, useEffect } from "react";
import Task from "./Task";
import Btn from "./Btn"

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

  const handleTaskCompletion = function (index) {
    const updatedTaskList = taskList.map((task, taskIndex) => {
      if (taskIndex === index) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });
    setTaskList(updatedTaskList);
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
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
      setTaskList((prevTaskList) => [...prevTaskList, newTask]);
      setNewTaskText("");
      setNewTaskComment("");
      localStorage.setItem(
        "tasks",
        JSON.stringify([...taskList, newTask])
      );
    }
  };
  
  const handleDeleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, taskIndex) => taskIndex !== index);
    setTaskList(updatedTaskList);
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
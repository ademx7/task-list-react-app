import { useState, useEffect } from "react";

function useTaskManagement() {
  const [taskList, setTaskList] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskComment, setNewTaskComment] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  const createTask = () => {
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

  const deleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, taskIndex) => taskIndex !== index);
    setTaskList(updatedTaskList);
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
  };

  const updateTask = (index, updatedTask) => {
    const updatedTaskList = taskList.map((task, taskIndex) => {
      if (taskIndex === index) {
        return updatedTask;
      }
      return task;
    });
    setTaskList(updatedTaskList);
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
  };

  return {
    taskList,
    newTaskText,
    newTaskComment,
    setNewTaskText,
    setNewTaskComment,
    createTask,
    deleteTask,
    updateTask
  };
}

export default useTaskManagement;
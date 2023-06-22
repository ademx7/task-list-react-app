const taskStyle = {
  width: "320px",
  height: "100px",
  color: "#ebeaea",
  border: "1px solid #ccc",
  margin: "10px auto",
  padding: "10px",
};

function TaskUI({ children }) {
  return <div style={taskStyle}>{children}</div>;
}

export default TaskUI;

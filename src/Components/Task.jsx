import TaskUI from "./TaskUI";

const textStyle = {
  fontSize  : '20px',
  fontWeight: '600',
  padding: '8px'

}

const commentStyle = {
  fontSize: '16px',
  padding: '8px'
}

function Task({ text, completed, comment, onCompletion, onDelete }) {
  return (
    <TaskUI>
      <div style={textStyle}>{text + " "}</div>
      <div style= {commentStyle}>{comment}</div>
      <input type="checkbox" checked={completed} onChange={onCompletion} />
      <button onClick={onDelete}>Borrar</button>
    </TaskUI>
  );
}

export default Task;
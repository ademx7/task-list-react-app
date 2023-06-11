function Task({ text, completed, comment, onCompletion, onDelete}) {
  return (
    <li>
      {text + " "}
      {comment}
      <input type="checkbox" checked={completed} onChange={onCompletion} />
      <button onClick={onDelete}>Borrar</button>
    </li>
  );
}

export default Task;
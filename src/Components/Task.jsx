function Task(props) {

    const  { text }   = props;
    return (

        <li>{ text }<input type="checkbox"></input></li>

    );
  }

export default Task;
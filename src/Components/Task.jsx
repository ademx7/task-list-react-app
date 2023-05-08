function Task (props) {
    // eslint-disable-next-line react/prop-types
    const  {text}  = props;
    return (

        <li>{ text }<input type="checkbox"></input></li>

    );
  }

export default Task;
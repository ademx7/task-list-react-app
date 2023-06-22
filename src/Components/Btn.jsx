const buttonStyle = {
    backgroundColor: '#5d605c',
    color: '#ebeaea',
    border: 'none',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px auto',
    cursor: 'pointer',
  };
  
  function Btn({ onClick, children }) {
    return (
      <button onClick={onClick} style={buttonStyle}>
        {children}
      </button>
    );
  }
  
  export default Btn;
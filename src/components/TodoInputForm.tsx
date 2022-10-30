import React from 'react'

const TodoInputForm: React.FC = () => {
    const [text, setText] = React.useState('');
    // const dispatch = useDispatch();
  
    const handleAction = () => {
      if (text.trim().length) {
        // dispatch(addTodo({ text }));
        setText('');
      }
    }
  
    const handleKey = (event: any) => {
      if (event.key === "Enter") handleAction();
    } 
  
    return (
      <div >
        <input
          id="newtodo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKey}
        />
        <button onClick={handleAction}>Add todo</button>
      </div>
    );
}

export default TodoInputForm
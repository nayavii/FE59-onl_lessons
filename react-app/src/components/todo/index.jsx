import { useState } from 'react';
import './index.scss';
import { Button } from '../button';

export const Todo = ({ todo, handleChange, handleDelete, handleEdit, isBlackTheme }) => {

  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(todo.title);

  const onClick = () => {
    setIsEdit(false);
    handleEdit(todo.id, value);
  };

  return (
    <li className={`todo ${isBlackTheme ? 'todo_black' : ''}` } key={todo.id}>
      <div className="todo__wrapper">
        <input
          type="checkbox"
          className="todo__completed"
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        <div className="todo__right">
          {isEdit ? (
            <>
              <input
                type="text"
                value={value}
                onInput={(event) => setValue(event.target.value)}
              />
              <Button onClick={onClick} title={'Save'}/>
            </>
          ) : (
            <p className="todo__title" onClick={() => setIsEdit(true)}>
              {todo.title}
            </p>
          )}
          <Button title={'Delete'} onClick={() => handleDelete(todo.id)}/>
        </div>
      </div>
    </li>
  )

}
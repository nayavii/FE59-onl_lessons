import { surfChecklist } from "./mock-data.js";
import "./index.scss";
import { useCallback, useContext, useEffect, useId, useMemo, useState } from "react";
import { Spinner } from "../spinner/index.jsx";
import { Button } from "../button/index.jsx";
import { Todo } from "../todo/index.jsx";
import { MyContext } from "../hooks/context.hook.jsx";

export const Todos = () => {
  const {isBlackTheme} = useContext(MyContext);

  const [data, setData] = useState(surfChecklist);
  const [isLoading, setIsLoading] = useState(false);
  const [newTodo, setNewTodo] = useState(null);
  const [isShowCompleted, setIsShowCompleted] = useState(false);
  // const id = useId();

  useEffect(() => {
    console.log(newTodo);
  });

  //   const testEx_1 = useMemo(() => {
  //   return [1, 2, 3].map((item) => {
  //     console.log("один раз ", item);
  //      много-много вычислений! но нужно вычислить один раз при создании

  //     return ++item;
  //   });
  // }, []);

  // const testEx_2 = [1, 2, 3].map((item) => {
  //   console.log("каждый раз при обновлении компонента ", item);
  //    много-много вычислений! но нужно вычислить один раз при создании

  //   return ++item;
  // });

  // useEffect(() => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         // setData(json)
  //         setData(todosData);
  //       })
  //       .finally(() => setIsLoading(false));
  //   }, 0);
  // }, [data]); //componentDidMount

  const handleChange = useCallback((id) => {
    // data[0].completed = !data[0].completed; // Так делать нельзя!!!!!!!!!!!!!!!!!
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }, []);

  const handleDeleteLastTodo = () => {
    setData((prevData) =>
      prevData.filter((_, index, array) => index !== array.length - 1)
    );
  };

  const handleDeleteAllTodo = () => {
    setData([]);
  };

  const handleShowAllTodo = () => {
    setIsShowCompleted(false);
  };

  const handleShowCompletedTodo = () => {
    setIsShowCompleted(true);
  };

  const handleEdit = (id, title) => {
    console.log("ToDos handleEdit", id, title);
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, title };
        }

        return item;
      })
    );
    ///
  };

  if (isLoading) {
    return <Spinner />;
  }

  const handleCreateTodo = () => {
    const id = Math.round(Math.random() * 100000);

    const todo = {
      userId: 1,
      id,
      title: newTodo,
      completed: false,
    };

    // data.unshift(todo) // ТАК НЕЛЬЗЯ ДЕЛАТЬ!!!!!!!!!!
    // setData([todo, ...data]); // так можно но лучше так:
    setData((prevData) => [todo, ...prevData]);
  };

  return (
    <div className={`todos ${isBlackTheme ? 'todos_black' : ''}` }>
      <div className="container">
        <h2 className="todos__title title">Surfer Todos</h2>
        <div className="todos__from">
          <input
            className="todos__input"
            type="text"
            // onInput={(event) => setNewTodo(event.target.value)}
            onBlur={(event) => setNewTodo(event.target.value)}
          />
          <Button
            className="todos__btn"
            title={"Create"}
            onClick={handleCreateTodo}
          />
          <Button
            className="todos__btn"
            title={"Delete Last"}
            onClick={handleDeleteLastTodo}
          />
          <Button
            className="todos__btn"
            title={"Delete All"}
            onClick={handleDeleteAllTodo}
          />
          <Button
            className="todos__btn"
            title={"Show All"}
            onClick={handleShowAllTodo}
          />
          <Button
            className="todos__btn"
            title={"Show completed"}
            onClick={handleShowCompletedTodo}
          />


        </div>
        <ul className="todos__list">
          {data
            .filter((todo) => (isShowCompleted ? todo.completed : true))
            .map((todo) => {
              // всего 11 тудушек, данные у всех есть одинаковые
              // для первой мы используем LargeTodo (index === 0)
              // для 2-5 мы используем MediumTodo
              // для 5-1 мы используем smallTodo
              // if (!index) {
              //   return <LargeTodo .../>
              // }

              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleChange={handleChange}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  isBlackTheme={isBlackTheme}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

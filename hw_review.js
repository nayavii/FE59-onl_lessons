const ul = document.querySelector(".bottom_block");

function loadedTodos(todoId) {
  const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  return fetch(url)
    .then((response) => response.json())
    .then((item) => {
      createToDo(
        {
          id: String(item.id),
          item: item.userId,
          text: item.title,
          isChecked: item.completed,
        },
        null,
        ul
      );
    });
}

loadedTodos(15)
  .then(() => loadedTodos(23))
  .then(() => loadedTodos(7))
  .then(() => loadedTodos(3))
  .catch((error) => console.log(error));

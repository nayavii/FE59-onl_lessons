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

////////////////////////////////////////////////////////////////////////

// Функция для получения поста по ID
function fetchPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(`Не удалось загрузить пост с ID ${id}`);
      }
      return res.json();
    }
  );
}

// Функция для создания HTML разметки поста
function createPostHTML(post) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  postDiv.innerHTML = `
      <h3>ID: ${post.id}</h3>
      <p>${post.title}</p>
  `;
  return postDiv;
}

// Функция для отображения постов с использованием цепочек промисов
function displayPostsWithPromiseChaining(postIds) {
  let promiseChain = Promise.resolve();

  postIds.forEach((postId) => {
    promiseChain = promiseChain
      .then(() => fetchPostById(postId))
      .then((post) => {
        const postHTML = createPostHTML(post);
        postsContainer.appendChild(postHTML);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
}

import { useEffect, useState } from "react";
import { Post } from "../post";
import { Button } from "../Button";
import img from "./images/img_1.jpg";
import "./index.scss";

export const App = () => {
  const [size, setSize] = useState(null);
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const post = {
    id: 1,
    image: img,
    text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
    date: "2021-12-12",
    lesson_num: 1,
    title: "Lorem Ipsum is Lorem Ipsum",
    author: 4,
  };

  const handleClick = (size) => {
    setSize(size);
  };

  useEffect(() => {
    fetch("https://studapi.teachmeskills.by/blog/posts/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // setPosts(data)
        setPosts([
          {
            id: 1,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 4,
          },
          {
            id: 2,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 5,
          },
          {
            id: 3,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 3,
          },
          {
            id: 4,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 4,
          },
          {
            id: 5,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 5,
          },
          {
            id: 6,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 3,
          },
          {
            id: 7,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 4,
          },
          {
            id: 8,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 5,
          },
          {
            id: 9,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 3,
          },
          {
            id: 10,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 5,
          },
          {
            id: 11,
            image: img,
            text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem IpsumLorem Ipsum is Lorem Ipsum and Lorem Ipsum is aute mud Lore maiore magna. Lorem Ipsum is Lorem Ipsum, Lorem Ips lorem temp tempus. Lorem Ipsum",
            date: "2021-12-12",
            lesson_num: 1,
            title: "Lorem Ipsum is Lorem Ipsum",
            author: 3,
          },

        ]);
      });
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Home Work 38</h1>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <h2>Карточка поста</h2>
          <div className="buttons">
            <Button
              title={"Big Post"}
              className={"btn"}
              onClick={() => handleClick("big")}
            />
            <Button
              title={"Medium Post"}
              className={"btn"}
              onClick={() => handleClick("medium")}
            />
            <Button
              title={"Small Post"}
              className={"btn"}
              onClick={() => handleClick("small")}
            />
          </div>
          {size && <Post size={size} post={post} />}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Посты</h2>
          <div className="posts">
            <div className="posts__left">
              <Post size="big" post={posts[0]} className="post_big" />

              <div className="posts__medium">
                {posts.slice(1, 5).map((post) => (
                  <Post key={post.id} size="medium" post={post} />
                ))}
              </div>
            </div>
            <div className="posts__right">
              {posts.slice(5).map((post) => (
                <Post key={post.id} size="small" post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

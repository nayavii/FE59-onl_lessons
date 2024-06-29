import { Button } from '../button';
import './index.scss';

export const Article = ({post, setCurrentPost}) => {

  const handleClick = () => {
    setCurrentPost(null)
  }

  return (
    <div className="article">
      <div className="container">
      <Button className={'article__btn'} title={"Go back"} onClick={handleClick} isOutlineButton={true} />
        <p className="article__date">{post.date}</p>
        <h2 className='article__title title'>{post.title}</h2>
        <div className="article__img">
          <img src={post.image} alt="" />
        </div>
        <p className="article__text">{post.text}</p>
      </div>
    </div>
  )
}
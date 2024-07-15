import { useNavigate } from 'react-router-dom';
import { Button } from '../button';
import './index.scss';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors';

export const RegisterSuccess = () => {
  const navigate = useNavigate();
  const handleClick = ()=> {
    navigate('/');
  }

  const user = useSelector(getUser);

  return (
    <div className="success">
      <div className="container">
        <div className="success__wrapper">
        <h2 className="success__title title">Registration Confirmation</h2>
        <p className='success__text'>Поздравляю, <span>{user.content.username}</span>, вы успешно зарегистрировались! </p>
        <p className='success__text'>Ваш email <span>{user.content.email}</span>, успешно сохранен </p>
        <Button className='success__btn' title={'Go to Home'} onClick={handleClick} />


        </div>
      </div>
    </div>
  )
}
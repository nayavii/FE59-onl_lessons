import { Button } from '../button';
import './index.scss';

export const RegisterSuccess = ({setPage}) => {

  const handleClick = ()=> {
    setPage('home');
  }

  return (
    <div className="success">
      <div className="container">
        <div className="success__wrapper">
        <h2 className="success__title title">Registration Confirmation</h2>
        <p className='success__text'> Вы успешно зарегистрировались! </p>
        <Button className='success__btn' title={'Go to Home'} onClick={handleClick} />


        </div>
      </div>
    </div>
  )
}
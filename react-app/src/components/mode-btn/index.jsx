import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_THEME_ACTION } from '../../actions';
import sun from './images/sun.svg';
import moon from './images/moon.svg';
import './index.scss';
import { getBlackTheme } from '../../selectors';

export const ModeButton = () => {
  const dispatch = useDispatch();
  const isBlackTheme = useSelector(getBlackTheme)

  const handleChangeTheme = () => {
    dispatch(CHANGE_THEME_ACTION)

  }


  // const {isBlackTheme} = useContext(MyContext);
  return (

    <div className="mode-btn" onClick={handleChangeTheme}>
      <img src={isBlackTheme ? sun : moon} alt="" />
    </div>
  );
};
import { useContext, useState } from 'react';
import sun from './images/sun.svg';
import moon from './images/moon.svg';
import './index.scss';
import { MyContext } from '../hooks/context.hook';

export const ModeButton = ({ handleChangeTheme }) => {

  const {isBlackTheme} = useContext(MyContext);
  return (

    <div className="mode-btn" onClick={handleChangeTheme}>
      <img src={isBlackTheme ? sun : moon} alt="" />
    </div>
  );
};
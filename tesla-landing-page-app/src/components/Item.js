import React from 'react';
import Button from './Button';
import './Item.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
{/* Destructure all values we passed through on App.js */}
const Item = ({ title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first }) => {
  return (
    <div className='item' style={{
      backgroundImage: `url(${backgroundImg})`
    }}>
    <div className='item__container'>
    <div className='item__text'>
    <p>{title}</p>
    <div className='item__textDesc'>
      <p>{desc}</p>
          </div>
        </div>
        {/* Buttons & arrows */}
          {/* Checking to see if 2 buttons are 'true' before running the code */}
        <div className='item__lowerThird'>
        <div className='item__buttons'>
          <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
          {twoButtons && (
            <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
          )}
          </div>
          {first && (
            <div className='item__expand'>
            {/* Material UI Icons */}
            <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Item

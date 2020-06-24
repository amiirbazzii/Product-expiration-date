import React, { useState } from 'react';

import { ReactComponent as Add } from '../../Static/Icon/plus.svg';

import './AddBtn.scss';

const AddList = (props) => {
  const [ToggleBtn, setToggleBtn] = useState(false);

  let styleBtn = 'svg';
  if (ToggleBtn) {
    styleBtn = `${styleBtn} rotate`;
  }
  const changeStyleBtn = () => {
    setToggleBtn(!ToggleBtn);
  };

  const handleClick = () => {
    changeStyleBtn();
    props.clicked();
  };
  return (
    <div className='add-icon'>
      <div className='bg-icon-' onClick={handleClick}>
        <Add className={styleBtn} />
      </div>
    </div>
  );
};
export default AddList;

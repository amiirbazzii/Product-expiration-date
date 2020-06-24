import React, { Component } from 'react';

import './NewList.scss';

export default class NewList extends Component {
  render() {
    return (
      <div
        className='new-list'
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)',
        }}
      >
        <h3 className='list-title'>اضافه کردن محصول</h3>
        <form className='list-inputs'>
          <input type='text' name='text' placeholder='نام محصول را وارد کنید' />
          <input type='date' name='date' />
          <input className='list-btn' type='button' value='اضافه کنید' />
        </form>
      </div>
    );
  }
}

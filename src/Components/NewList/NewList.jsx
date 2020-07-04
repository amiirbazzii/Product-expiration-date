import React, { Component } from 'react';

import './NewList.scss';

export default class NewList extends Component {
  state = {
    name: '',
    date: null,
  };

  handleClick = () => {
    this.props.clicked();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.term === '') return;
    this.props.onFormSubmit(this.state);
    this.setState({ name: '', date: null });
  };

  render() {
    return (
      <div
        className='new-list'
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)',
          opacity: this.props.show ? 1 : 0,
        }}
      >
        <h3 className='list-title'>اضافه کردن محصول</h3>
        <form className='list-inputs' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='نام محصول را وارد کنید'
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type='date'
            name='date'
            onChange={(e) => this.setState({ date: e.target.value })}
          />
          <button className='list-btn' onClick={this.handleClick}>
            اضافه کنید
          </button>
        </form>
      </div>
    );
  }
}

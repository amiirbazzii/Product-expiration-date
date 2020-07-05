import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';

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
    if (this.state.name === '' || this.state.date === null) return;
    this.props.onFormSubmit(this.state);
    this.setState({ name: '', date: null });
  };

  render() {
    return (
      <div
        className='new-list'
        style={{
          opacity: this.props.show ? 1 : 0,
        }}
      >
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <form
          className='list-inputs'
          onSubmit={this.handleSubmit}
          style={{
            display: this.props.show ? 'block' : 'none',
          }}
        >
          <h3
            className='list-title'
            style={{
              display: this.props.show ? 'block' : 'none',
            }}
          >
            اضافه کردن محصول
          </h3>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='نام محصول را وارد کنید'
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type='date'
            name='date'
            value={this.state.date}
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

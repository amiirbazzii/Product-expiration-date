import React, { Component } from 'react';

import ListItem from './ListItem/ListItem';

import './List.scss';

const listData = [
  {
    commodity: 'بستنی کیم',
    entryDate: 'بیست اریبهشت',
    expirationDate: 'سی خرداد',
  },
  {
    commodity: 'بستنی لیوانی',
    entryDate: 'بیست اریبهشت',
    expirationDate: 'سی خرداد',
  },
  {
    commodity: 'بستنی سالار',
    entryDate: 'بیست اریبهشت',
    expirationDate: 'سی خرداد',
  },
  {
    commodity: 'کیک شکلاتی',
    entryDate: 'بیست اریبهشت',
    expirationDate: 'سی خرداد',
  },
  {
    commodity: 'کیک میوه‌ای',
    entryDate: 'بیست اریبهشت',
    expirationDate: 'سی خرداد',
  },
  {
    commodity: 'نوشابه',
    entryDate: 'بیست اریبهشت',
    expirationDate: 'سی خرداد',
  },
  {
    commodity: 'دلستر',
    entryDate: 'بیست اریبهشت',
    expirationDate: 'سی خرداد',
  },
  {
    commodity: 'آب معدنی',
    entryDate: 'بیست اریبهشت',
    expirationDate: 'سی خرداد',
  },
  {
    commodity: 'چیپس',
    entryDate: 'بیست اریبهشت',
    expirationDate: 'سی خرداد',
  },
];
export default class List extends Component {
  render() {
    return (
      <center className='list'>
        {listData.map((item, index) => {
          return (
            <ListItem
              key={index}
              commodity={item.commodity}
              entry={item.entryDate}
              expiration={item.expirationDate}
            />
          );
        })}
      </center>
    );
  }
}

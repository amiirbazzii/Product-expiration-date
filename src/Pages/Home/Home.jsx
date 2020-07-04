import React, { Component } from 'react';
import moment from 'jalali-moment';

import MenuBtn from '../../Components/MenuBtn/MenuBtn';
import Time from '../../Components/Date/Date';
import { today, now } from '../../Components/Date/Date';
import List from '../../Components/List/List';
import SideBar from '../../Components/SideBar/SideBar';
import AddBtn from '../../Components/AddBtn/AddBtn';
import NewList from '../../Components/NewList/NewList';

import './Home.scss';

export default class index extends Component {
  state = {
    sideBar: false,
    addList: false,
    listData: [
      {
        commodity: '1asclkmdc',
        expirationDate: 'jsnfkjsdnfsdf',
        entryDate: 65132135,
      },
      {
        commodity: '2ascknasdmc',
        expirationDate: 'jsnfkjsdnfsdf',
        entryDate: 65132135,
      },
    ],
  };

  showSideBar = () => {
    this.setState({ sideBar: true });
  };

  closeSideBar = () => {
    this.setState({ sideBar: false });
  };

  handleAddList = () => {
    this.setState({ addList: !this.state.addList });
  };

  handleSubmit = (item) => {
    const data = {
      commodity: item.name,
      expirationDate: this.convertDate(item.date),
      entryDate: today,
    };
    this.setState({ listData: [...this.state.listData, data] });
  };

  handleDelete = (id) => {
    console.log(id);

    const newArr = [...this.state.listData];

    newArr.splice(id, 1);
    this.setState({ listData: newArr });
  };

  //Solar date
  convertDate = (date) => {
    if (date == null) {
      date = now;
    }
    return moment(date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  };

  render() {
    return (
      <div className='home'>
        <SideBar show={this.state.sideBar} sideBarClosed={this.closeSideBar} />
        <header className='nav'>
          <MenuBtn show={this.showSideBar} close={this.state.sideBar} />
          <Time />
        </header>
        <List data={this.state.listData} onDelete={this.handleDelete} />
        <AddBtn clicked={this.handleAddList} btnStyle={this.state.addList} />
        <NewList
          show={this.state.addList}
          clicked={this.handleAddList}
          list={this.state.listData}
          onFormSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

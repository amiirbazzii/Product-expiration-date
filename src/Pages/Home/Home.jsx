import React, { Component } from 'react';

import MenuBtn from '../../Components/MenuBtn/MenuBtn';
import Time from '../../Components/Date/Date';
import List from '../../Components/List/List';
import SideBar from '../../Components/SideBar/SideBar';
import AddBtn from '../../Components/AddBtn/AddBtn';
import NewList from '../../Components/NewList/NewList';

import './Home.scss';

export default class index extends Component {
  state = {
    sideBar: false,
    addList: false,
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

  render() {
    return (
      <div className='home'>
        <SideBar show={this.state.sideBar} sideBarClosed={this.closeSideBar} />
        <header className='nav'>
          <MenuBtn show={this.showSideBar} close={this.state.sideBar} />
          <Time />
        </header>
        <List />
        <AddBtn clicked={this.handleAddList} />
        <NewList show={this.state.addList} clicked={this.handleAddList} />
      </div>
    );
  }
}

import React,{ Component } from 'react';
import { Sling as Hamburger } from 'hamburger-react'

import Pagerouter from './Pagerouter';

export default class Hanburger extends Component {
  constructor(props) {
    super(props);
    this.state={
      isOpen:false
    }
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    return (
      <div className=" md:flex md:justify-between md:py-4 bg-gray-400 text-green-300 md:px-4 items-center ">
        <header>
          <div className=" flex justify-between items-center px-4 ">
            <h1 className=" text-4xl font-semibold md:text-3xl ">maresuke</h1>
            <div className=" md:hidden ">
              <nav
                onBlur={this.onBlurHandler}
                onFocus={this.onFocusHandler}
              >
                <button
                  onClick={this.onClickHandler}
                  aria-haspopup="true"
                  aria-expanded={this.state.isOpen}
                >
                  <Hamburger rounded />
                </button>
              </nav>
            </div>
          </div>
        </header>
        <div className=" hidden md:flex ">
          <Pagerouter></Pagerouter>
        </div>
        <div className=" md:hidden ">
          {this.state.isOpen && (
            <Pagerouter />
          )}
        </div>
      </div>
    )
  }
}
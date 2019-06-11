import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import AppViewer from './containers/AppViewer';
import ToolBar from './containers/ToolBar';
import LocationBar from './containers/LocationBar';
import styles from './App.module.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <ToolBar className={styles.toolbar} />
        <LocationBar className={styles.locationbar} />
        <AppViewer />
      </>
    );
  }
}

export default hot(module)(App);

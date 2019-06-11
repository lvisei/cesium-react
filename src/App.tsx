import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import AppViewer from './containers/AppViewer';
import ToolBar from './containers/ToolBar';
import LocationBar from './containers/LocationBar';
import styles from './App.module.css';

interface Props {}

class App extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

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

export default hot(App);

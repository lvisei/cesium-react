import React, { Component } from 'react';
import styles from './index.module.css';
import { inject, observer } from 'mobx-react';

@inject('appViewer')
@observer
class LocationBar extends Component {
  _className = `${styles.locationbar} ${this.props.className ? this.props.className : ''} `;

  render() {
    const { positionData } = this.props.appViewer;
    const { long, lat, height, elevation } = positionData
      ? positionData
      : { long: null, lat: null, height: null, elevation: null };

    return (
      <div className={this._className}>
        <div>
          {height ? <span className={styles.locationcamera}>视点高：{height}米</span> : null}
          {/* {height ? <span className={styles.locationcamera}>俯仰角：-34度</span> : null} */}
          {/* {height ? <span className={styles.locationcamera}>视角方向：86度</span> : null} */}
          {elevation ? <span className={styles.locationcamera}>海拔：{elevation}米</span> : null}
          {long ? <span className={styles.locationcamera}>经度：{long}</span> : null}
          {lat ? <span className={styles.locationcamera}>纬度：{lat}</span> : null}
        </div>
        <div className={styles.distancelegend}>比例尺</div>
      </div>
    );
  }
}

export default LocationBar;

import React from 'react';
import styles from './index.module.css';
import { observer, MobXProviderContext } from 'mobx-react';
import { IStores } from '@/stores';

const LocationBar = observer(({ className }: { className: string }) => {
  const _className = `${styles.locationbar} ${className} `;
  const {
    appViewer: { positionData },
  } = React.useContext(MobXProviderContext) as IStores;
  const { long, lat, height, elevation } = positionData;

  // console.log('LocationBar render');

  return (
    <div className={_className}>
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
});

export default LocationBar;

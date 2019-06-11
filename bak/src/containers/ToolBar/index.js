import React, { PureComponent } from 'react';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { inject } from 'mobx-react';
import styles from './index.module.css';
import appViewerStore from '@/stores/modules/appViewer';

const handleCzmlMenuClick = ({ key: type }) => {
  if (type === 'Box') {
    import('@/data/czml/czmlBox').then(({ default: czmlBox }) => {
      appViewerStore.setCzmlData(czmlBox);
    });
  } else if (type === 'Satellite') {
    import('@/data/czml/satelliteCzml').then(({ default: satelliteCzml }) => {
      appViewerStore.setCzmlData(satelliteCzml);
    });
  } else if (type === 'DynamicPoint') {
    import('@/data/czml/dynamicPoint').then(({ default: dynamicPoint }) => {
      appViewerStore.setCzmlData(dynamicPoint);
    });
  } else if (type === 'Path') {
    import('@/data/czml/pathCzml').then(({ default: pathCzml }) => {
      appViewerStore.setCzmlData(pathCzml);
    });
  }
};

const czmlMenu = (
  <Menu onClick={handleCzmlMenuClick}>
    <Menu.Item key="Box">Box</Menu.Item>
    <Menu.Item key="Satellite">Satellite</Menu.Item>
    <Menu.Item key="DynamicPoint">DynamicPoint</Menu.Item>
    <Menu.Item key="Path">Path</Menu.Item>
  </Menu>
);

const handleGeoJsonClick = ({ key: type }) => {
  if (type === 'Point') {
    import('@/data/geoJson/pointGeoJson').then(({ default: pointGeoJson }) => {
      appViewerStore.setGeoJsonData(pointGeoJson);
    });
  } else if (type === 'Simple Styles') {
    import('@/data/geoJson/simplestylesGeojson').then(({ default: simplestylesGeojson }) => {
      appViewerStore.setGeoJsonData(simplestylesGeojson);
    });
  } else if (type === 'Population') {
    import('@/data/geoJson/statestopoGeojson').then(({ default: statestopoGeojson }) => {
      appViewerStore.setGeoJsonData(statestopoGeojson);
    });
  }
};

const geoJsonMenu = (
  <Menu onClick={handleGeoJsonClick}>
    <Menu.Item key="Point">Point</Menu.Item>
    <Menu.Item key="Simple Styles">Simple Styles</Menu.Item>
    <Menu.Item key="Population">Population</Menu.Item>
  </Menu>
);

@inject('appViewer')
class ToolBar extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { setCzmlData, setGeoJsonData } = this.props.appViewer;
    const _className = `${styles.toolbar} ${this.props.className ? this.props.className : ''} `;
    return (
      <div className={_className}>
        <Dropdown overlay={czmlMenu}>
          <Button type="primary" style={{ marginRight: 10, marginBottom: 10 }}>
            Render czml and fly to <Icon type="down" />
          </Button>
        </Dropdown>
        <Dropdown overlay={geoJsonMenu}>
          <Button type="primary">
            Render geojson and fly to <Icon type="down" />
          </Button>
        </Dropdown>
        {/* <Button
          type="primary"
          style={{ marginLeft: 10 }}
          onClick={event => {
            setGeoJsonData(pointGeoJson);
          }}
        >
          Render geojson and fly to
        </Button> */}
      </div>
    );
  }
}

export default ToolBar;

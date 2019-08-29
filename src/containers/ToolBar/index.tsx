import React, { PureComponent } from 'react';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { inject } from 'mobx-react';
import styles from './index.module.css';
import { IStores } from '@/stores';
import appViewerStore from '@/stores/modules/appViewer';

enum CzmmlMenuItemName {
  Box = 'Box',
  Satellite = 'Satellite',
  DynamicPoint = 'DynamicPoint',
  Path = 'Path'
}

const handleCzmlMenuClick = ({ key }: { key: string }) => {
  if (key === CzmmlMenuItemName.Box) {
    import('@/data/czml/czmlBox.json').then(({ default: czmlBox }) => {
      appViewerStore.setCzmlData(czmlBox);
    });
  } else if (key === CzmmlMenuItemName.Satellite) {
    import('@/data/czml/satelliteCzml.json').then(({ default: satelliteCzml }) => {
      appViewerStore.setCzmlData(satelliteCzml);
    });
  } else if (key === CzmmlMenuItemName.DynamicPoint) {
    import('@/data/czml/dynamicPoint.json').then(({ default: dynamicPoint }) => {
      appViewerStore.setCzmlData(dynamicPoint);
    });
  } else if (key === CzmmlMenuItemName.Path) {
    import('@/data/czml/pathCzml.json').then(({ default: pathCzml }) => {
      appViewerStore.setCzmlData(pathCzml);
    });
  }
};

const czmlMenu = (
  <Menu onClick={handleCzmlMenuClick}>
    <Menu.Item key={CzmmlMenuItemName.Box}>Box</Menu.Item>
    <Menu.Item key={CzmmlMenuItemName.Satellite}>Satellite</Menu.Item>
    <Menu.Item key={CzmmlMenuItemName.DynamicPoint}>DynamicPoint</Menu.Item>
    <Menu.Item key={CzmmlMenuItemName.Path}>Path</Menu.Item>
  </Menu>
);

enum GeoJsonMenuItemName {
  Point = 'Point',
  SimpleStyles = 'Simple Styles',
  Population = 'Population'
}

const handleGeoJsonClick = ({ key }: { key: string }) => {
  if (key === GeoJsonMenuItemName.Point) {
    import('@/data/geoJson/pointGeoJson.json').then(({ default: pointGeoJson }) => {
      appViewerStore.setGeoJsonData(pointGeoJson);
    });
  } else if (key === GeoJsonMenuItemName.SimpleStyles) {
    import('@/data/geoJson/simplestylesGeojson.json').then(({ default: simplestylesGeojson }) => {
      appViewerStore.setGeoJsonData(simplestylesGeojson);
    });
  } else if (key === GeoJsonMenuItemName.Population) {
    import('@/data/geoJson/statestopoGeojson.json').then(({ default: statestopoGeojson }) => {
      appViewerStore.setGeoJsonData(statestopoGeojson);
    });
  }
};

const geoJsonMenu = (
  <Menu onClick={handleGeoJsonClick}>
    <Menu.Item key={GeoJsonMenuItemName.Point}>Point</Menu.Item>
    <Menu.Item key={GeoJsonMenuItemName.SimpleStyles}>Simple Styles</Menu.Item>
    <Menu.Item key={GeoJsonMenuItemName.Population}>Population</Menu.Item>
  </Menu>
);

interface IProps {
  className: string;
  appViewer?: IStores['appViewer'];
}

@inject((stores: IStores) => ({
  appViewer: stores.appViewer
}))
class ToolBar extends PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    // const { setCzmlData, setGeoJsonData } = this.props.appViewer!;
    const _className = `${styles.toolbar} ${this.props.className ? this.props.className : ''} `;
    return (
      <div className={_className}>
        <Dropdown overlay={czmlMenu}>
          <Button ghost type="primary" style={{ marginRight: 10, marginBottom: 10 }}>
            Render czml and fly to <Icon type="down" />
          </Button>
        </Dropdown>
        <Dropdown overlay={geoJsonMenu}>
          <Button ghost type="primary">
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

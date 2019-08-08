import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import stores from './stores';

import './index.css';
import Loading from './components/Loading';

import * as serviceWorker from './utils/serviceWorker';

// Hack
import '@/@types/cesium.d.ts';

const { lazy, Suspense } = React;

const App = lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={<Loading height="100vh" tip={'加载中...'} />}>
    <Provider {...stores}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

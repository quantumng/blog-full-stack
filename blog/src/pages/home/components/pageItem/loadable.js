import React from 'react';
import Loadable from 'react-loadable';
import {
  NoPage
} from './style';

const LoadableComponent = Loadable({
  loader: () => import ('./'),
  loading () {
    return <NoPage>正在加载...</NoPage>
  }
})

export default class App extends React.Component {
  render () {
    return <LoadableComponent/>
  }
}
import React from 'react';
import Loadable from 'react-loadable';
import {
  PageWrapper,
  NoData
} from './style';

const LoadableComponent = Loadable({
  loader: () => import ('./'),
  loading () {
    return <PageWrapper><NoData>正在加载...</NoData></PageWrapper>
  }
})

export default class App extends React.Component {
  render () {
    return <LoadableComponent/>
  }
}
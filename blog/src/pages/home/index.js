import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import * as actionCreator from './store/actionCreator';
import PageItem from './components/pageItem';

import {
  HomeWrapper
} from './style';
class Home extends PureComponent {
  render () {
    return (
      <HomeWrapper>
        <PageItem></PageItem>
      </HomeWrapper>)
  }
}
export default connect()(Home);

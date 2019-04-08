import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreator from './store/actionCreator';
import PageItem from './components/pageItem';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  CategoryWrapper,
  CategoryItem,
  BackTop
} from './style';
class Home extends PureComponent {
  componentDidMount () {
    this.props.getCategoryList()
    this.bindEvents()
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  handleScrollTop () {
    window.scrollTo(0, 0)
  }
  render () {
    const { categoryList, showScroll } = this.props
    return (
      <HomeWrapper>
        <HomeRight>
          <CategoryWrapper>
            <h2 className={'title'}>分类目录</h2>
            { categoryList && categoryList.length ? categoryList.map(item => {
              return (
                <CategoryItem key={item._id}>
                    <Link to={{
                      pathname: `/category/${item._id}`
                    }}>{`${item.name}(${item.pages.length})`}</Link>
                </CategoryItem>
              )
            }) : <CategoryItem>暂无分类</CategoryItem> }
          </CategoryWrapper>
        </HomeRight>
        <HomeLeft>
          <PageItem></PageItem>
        </HomeLeft>
        { showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
      </HomeWrapper>)
  }
}
const mapStateToProps = state => {
  return {
    categoryList: state.getIn(['home', 'categoryList']),
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCategoryList: () => {
      const action = actionCreator.getCategoryList()
      dispatch(action)
    },
    changeScrollTopShow (e) {
      if (document.documentElement.scrollTop > 200) {
        const action = actionCreator.toggleTopShow(true)
        dispatch(action)
      } else {
        const action = actionCreator.toggleTopShow(false)
        dispatch(action)
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

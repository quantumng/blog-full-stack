import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as actionCreator from '../../../home/store/actionCreator';
import {
  PageContent,
  NoPage,
  LoadMore
} from './style';

function Content (props) {
  const { data } = props
  const { title, desc, author, category, _id } = data
  const cate = category.name
  const cateId = category['_id']
  const authorName = author.nickname
  return <div>
    <Link className={'title'} target="_blank" to={`/details/${_id}`}>{title}</Link>
    <div className={'content'}>
    {desc}
      <Link to={`/details/${_id}`} target="_blank" className={'read-more'}>阅读更多</Link>
    </div>
    <div className={'info'}>
      <span className={'author'}>作者：{authorName}</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span className={'comment'}>分类：<Link to={{ pathname: `/category/${cateId}` }}>{cate}</Link></span>
    </div>
  </div>
}

class Page extends PureComponent {
  componentDidMount () {
    const { match, getPageList } = this.props
    const { params } = match
    getPageList(params)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      console.log('nextProps.match.params.id', nextProps.match.params.id)
      console.log('this.props.match.params.id', this.props.match.params.id)
      const { getPageList } = this.props
      getPageList(nextProps.match.params)
    }
  }
  render () {
    const { pageList, getMoreList, currentPage, hasMorePage, match } = this.props
    const { params } = match
    if (pageList.length) {
      return <div>
        {pageList.map(item => {
        return <PageContent key={item._id}>
          <Content data={item} />
        </PageContent>
      })}
        {hasMorePage && !(params && params.id) ? <LoadMore onClick={() => {getMoreList(currentPage)}}>加载更多...</LoadMore> : <LoadMore>没有更多文章了</LoadMore>}
      </div>
    } else {
      return <NoPage>暂无文章</NoPage>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    hasMorePage: state.getIn(['home', 'hasMorePage']),
    currentPage: state.getIn(['home', 'currentPage']),
    pageList: state.getIn(['home', 'pageList'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPageList: (params) => {
      const action = actionCreator.getPageList(params)
      dispatch(action)
    },
    getMoreList: (params) => {
      const action = actionCreator.getMoreList(params)
      dispatch(action)
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page))
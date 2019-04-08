import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import {
  PageWrapper,
  PageContent
} from './style';

const createSetup = (content) => {
  return {__html: content}
}

class Page extends PureComponent {
  async componentWillMount () {
    const { match: { params: { id } }, getPageData } = this.props
    await getPageData(id)
  }
  render () {
    const { title, content, author, category, categoryId } = this.props
    return <PageWrapper>
      <PageContent>
        <h2 className={'title'}>{title}</h2>
        <div className={'info'}>
          <span className={'author'}>作者：{author}</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span className={'comment'}>分类：<Link to={{
                      pathname: `/category/${categoryId}`
                    }}>{category}</Link></span>
        </div>
        <div className={'content'}>
        <div dangerouslySetInnerHTML={createSetup(content)}></div>
        </div>
      </PageContent>
    </PageWrapper>
  }
}
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    author: state.getIn(['detail', 'author']),
    category: state.getIn(['detail', 'category']),
    categoryId: state.getIn(['detail', 'categoryId'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPageData: (params) => {
      const action = actionCreator.getPageData(params)
      dispatch(action)
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page))
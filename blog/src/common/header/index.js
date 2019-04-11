import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store';
import {
  HeaderWrapper,
  Logo,
  MenuBtn,
  Menu,
  MenuItem
} from './style';

class Header extends PureComponent {
  componentDidMount () {
    this.props.getCategoryList()
  }
  goToTop () {
    window.scrollTo(0, 0)
    const { showMenu } = this.props
    if (showMenu) {
      this.props.changeMenuShow(showMenu)
    }
  }
  render () {
    const { categoryList, showMenu, changeMenuShow } = this.props
    return (
    <HeaderWrapper onDoubleClick={ () => { this.goToTop() }}>
      <Link to="/"><Logo /></Link>
      <CSSTransition in={showMenu} timeout={500} classNames="rotate">
        <MenuBtn onClick={() => { changeMenuShow(showMenu) }}>个</MenuBtn>
      </CSSTransition>
      { showMenu ? <Menu>
        { categoryList && categoryList.length ? categoryList.map(item => {
          return (
            <MenuItem key={item._id}>
                <NavLink 
                to={{ pathname: `/category/${item._id}` }}
                activeClassName="selected"
                onClick={() => {changeMenuShow(showMenu)}}>
                {`${item.name}(${item.pages.length})`}
                </NavLink>
            </MenuItem>
          )
        }) : <MenuItem>暂无分类</MenuItem> }
      </Menu> : null }
    </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    categoryList: state.getIn(['header', 'categoryList']),
    showMenu: state.getIn(['header', 'showMenu'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryList: () => {
      const action = actionCreator.getCategoryList()
      dispatch(action)
    },
    changeMenuShow (showMenu) {
      const action = actionCreator.toggleMenuShow(!showMenu)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
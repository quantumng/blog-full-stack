import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
// import { actionCreator } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem
} from './style';

class Header extends PureComponent {
  render () { 
    return (
    <HeaderWrapper>
      <Link to="/"><Logo /></Link>
      <Nav>
        <NavItem className='left'><Link to="/">首页</Link></NavItem>
        <NavItem className='left'><a target={'_blank'} href={'//admin.degebug.com'}>博客后台</a></NavItem>
      </Nav>
    </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
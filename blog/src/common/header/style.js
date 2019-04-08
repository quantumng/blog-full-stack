import styled from 'styled-components'
import logoUrl from '../../static/blog-logo.png'
export const HeaderWrapper = styled.div`
  height:58px;
  border-bottom: 1px solid #ddd;
  position: relative;
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 50px;
  width: 100px;
  height: 56px;
  background: url(${logoUrl});
  background-size: contain;
  @media screen and (max-width:769px) {
    left: 50%;
    transform: translateX(-50%);
	}
`
export const Nav = styled.div`
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  @media screen and (max-width:769px) {
		display: none;
	}
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  a {
    color: #000;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
`
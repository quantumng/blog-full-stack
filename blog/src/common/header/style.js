import styled from 'styled-components'
import {v} from '../../lib/styleUtils';
import logoUrl from '../../static/blog-logo.png'

export const HeaderWrapper = styled.div`
  height: ${v('64px')};
  width: 100%;
  border-bottom: 1px solid #ddd;
  position: fixed;
  background: #fff;
  .rotate-enter {
    transform: rotate(0deg);
  }
  .rotate-enter-active {
    transform: rotate(180deg);
    transition: transform 0.5s;
  }
  .rotate-enter-done {
    transform: rotate(180deg);
  }
  .rotate-exit {
    transform: rotate(180deg);
  }
  .rotate-exit-active {
    transform: rotate(0deg);
    transition: transform 0.5s;
  }
  .rotate-exit-done {
    transform: rotate(0deg);
  }
`
export const Logo = styled.div`
  float: left;
  margin-top: ${v('4px')}
  margin-left: ${v('50px')};
  width: ${v('100px')};
  height: ${v('64px')};
  background: url(${logoUrl}) no-repeat;
  background-size: contain;
`
export const MenuBtn = styled.div`
  float: right;
  margin-right: ${v('50px')};
  margin-top: ${v('9px')};
  width: ${v('40px')};
  height: ${v('40px')};
  line-height: ${v('40px')};
  font-size: ${v('18px')};
  border: ${v('1px')} solid #ddd;
  border-radius: ${v('8px')};
  text-align: center;
`

export const Menu = styled.ul`
  position: absolute;
  top: ${v('59px')};
  width: 100%;
  max-height: ${v('170px')};
  overflow-y: auto;
  border: ${v('1px')} solid #ddd;
  background: #fff;
  list-style: none;
`
export const MenuItem = styled.li`
  padding: 0 ${v('30px')};
  margin: ${v('10px')} 0;
  text-align: center;
  box-sizing: border-box;
  a {
    display: block;
    height: ${v('40px')};
    width: 100%;
    line-height: ${v('40px')};
    border: ${v('1px')} solid #ddd;
    border-radius: ${v('8px')};
    color: #000;
    &.selected {
      background: #ddd;
    }
  }
`

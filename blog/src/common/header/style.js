import styled from 'styled-components'
import {v} from '../../lib/styleUtils';
import logoUrl from '../../static/blog-logo.png'

export const HeaderWrapper = styled.div`
  height: ${v('90px')};
  width: 100%;
  border-bottom: ${v('2px')} solid #ddd;
  box-shadow: 0px 1px 5px 1px #ccc;
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
  margin-left: ${v('20px')};
  width: ${v('180px')};
  height: ${v('90px')};
  background: url(${logoUrl}) no-repeat;
  background-size: contain;
`
export const MenuBtn = styled.div`
  float: right;
  margin-right: ${v('50px')};
  margin-top: ${v('13px')};
  width: ${v('64px')};
  height: ${v('64px')};
  line-height: ${v('64px')};
  font-size: ${v('32px')};
  border: ${v('2px')} solid #ddd;
  border-radius: ${v('8px')};
  text-align: center;
`

export const Menu = styled.ul`
  position: absolute;
  top: ${v('91px')};
  width: 100%;
  max-height: ${v('200px')};
  overflow-y: auto;
  border: ${v('2px')} solid #ddd;
  background: #fff;
  list-style: none;
  box-shadow: 0px 2px 10px 2px #ccc;
`
export const MenuItem = styled.li`
  padding: 0 ${v('30px')};
  margin: ${v('16px')} 0;
  text-align: center;
  box-sizing: border-box;
  a {
    display: block;
    height: ${v('40px')};
    width: 100%;
    line-height: ${v('40px')};
    border: ${v('2px')} solid #ddd;
    border-radius: ${v('8px')};
    color: #000;
    &.selected {
      background: #ddd;
    }
  }
`

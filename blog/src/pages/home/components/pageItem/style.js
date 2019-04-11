import styled from 'styled-components';
import {v} from '../../../../lib/styleUtils';

export const PageContent = styled.div`
  width: 100%;
  border: ${v('2px')} solid #ddd;
  border-radius: ${v('4px')};
  padding: ${v('20px')};
  margin: ${v('20px')} auto;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 1px #ccc;
  a {
    color: #000;
  }
  .title {
    display: block;
    width: 100%;
    padding: ${v('10px')};
    border-bottom: ${v('2px')} solid #ddd;
    color: #000;
    font-weight: 600;
    box-sizing: border-box;
  }
  .content {
    margin: ${v('20px')} 0;
    padding: ${v('10px')};
    text-indent: 2em;
    .read-more {
      text-decoration: underline;
      color: #666;
      margin-left: ${v('10px')};
    }
  }
  .info {
    padding: ${v('10px')};
    padding-top: ${v('20px')}
    border-top: ${v('2px')} solid #ddd;
    height: ${v('30px')};
    line-height: ${v('30px')};
    a {
      color: #000;
    }
  }
`

  export const NoPage = styled.div`
    width: 100%;
    border: ${v('2px')} solid #ddd;
    border-radius: ${v('4px')};
    padding: ${v('20px')};
    margin: ${v('20px')} auto;
    box-sizing: border-box;
    text-align: center;
`

export const LoadMore = styled.div`
	width: 100%;
  height: ${v('40px')};
  line-height: ${v('40px')};
  margin: ${v('30px')} auto;
  text-align:center;
  border: ${v('2px')} solid #ddd;
	border-radius: ${v('20px')};
  cursor: pointer;
  box-shadow: 1px 1px 10px 1px #ccc;
`
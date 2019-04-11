import styled from 'styled-components';
import {v} from '../../lib/styleUtils';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: ${v('30px')};
  padding-top: ${v('78px')};
  box-sizing: border-box;
`
export const NoData = styled.div`
  width: 100%;
  border: ${v('1px')} solid #ddd;
  border-radius: ${v('4px')};
  padding: ${v('20px')};
  margin: ${v('20px')} auto;
  box-sizing: border-box;
  text-align: center;
`

export const PageContent = styled.div`
  border: ${v('1px')} solid #ddd;
  border-radius: ${v('8px')};
  padding: ${v('30px')};
  margin: ${v('20px')} auto;
  box-sizing: border-box;
  .title {
    text-align: center;
    padding: ${v('10px')};
  }
  .content {
    line-height: ${v('36px')};
    margin: ${v('20px')} 0;
    padding: ${v('20px')};
    img {
      max-width: 95%;
    }
    p {
      text-indent: 2em;
    }
    .read-more {
      margin-left: ${v('10px')};
    }
  }
  .info {
    font-size: ${v('12px')};
    text-align: center;
    padding: ${v('10px')};
    border-bottom: ${v('1px')} solid #ddd;
    height: ${v('30px')};
    line-height: ${v('30px')};
  }
`
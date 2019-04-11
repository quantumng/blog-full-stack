import styled from 'styled-components'
import {v} from '../../lib/styleUtils';

export const FooterWrapper = styled.div`
  width: 100%;
  height: ${v('50px')};
  line-height: ${v('24px')};
  overflow: auto;
  text-align: center;
  font-size: ${v('12px')};
  color: rgba(0,0,0,.5);
  a {
    color: rgba(0,0,0,.5);
  }
`
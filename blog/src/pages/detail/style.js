import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`
export const NoData = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 20px auto;
  box-sizing: border-box;
  text-align: center;
`

export const PageContent = styled.div`
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 30px;
  margin: 20px auto;
  box-sizing: border-box;
  .title {
    text-align: center;
    padding: 10px;
  }
  .content {
    overflow: hidden;
    line-height: 30px;
    margin: 20px 0;
    padding: 20px;
    text-index: 2em;
    .read-more {
      margin-left: 10px;
    }
  }
  .info {
    font-size: 12px;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    height: 30px;
    line-height: 30px;
  }
`
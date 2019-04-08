import styled from 'styled-components';

export const PageContent = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 20px auto;
  box-sizing: border-box;
  .title {
    display: block;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    color: #000;
    font-weight: 600;
    box-sizing: border-box;
  }
  .content {
    line-height: 30px;
    margin: 20px 0;
    padding: 10px;
    text-index: 2em;
    .read-more {
      text-decoration: underline;
      color: #666;
      margin-left: 10px;
    }
  }
  .info {
    padding: 10px;
    border-top: 1px solid #ddd;
    height: 30px;
    line-height: 30px;
  }
`

  export const NoPage = styled.div`
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    margin: 20px auto;
    box-sizing: border-box;
    text-align: center;
`

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px auto;
  text-align:center;
  border: 1px solid #ddd;
	border-radius: 20px;
	cursor: pointer;
`
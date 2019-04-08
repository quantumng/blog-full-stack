import styled from 'styled-components';

export const HomeWrapper = styled.div`
	float: left;
	width: 100%;
	padding: 20px 100px;
	box-sizing: border-box;
	overflow: auto;
	@media screen and (max-width:993px) {
		padding: 20px;
	}
`

export const HomeLeft = styled.div`
	float: left;
	width: 80%;
	@media screen and (max-width:769px) {
		width: 100%;
		float: none;
	}
`;

export const HomeRight = styled.div`
	float: right;
	width: 15%;
	box-sizing: border-box;
	@media screen and (max-width:769px) {
		float: none;
		width: 100%;
		margin: 0 auto;
	}
`

export const CategoryWrapper = styled.div`
	margin: 20px 0;
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 10px;
	box-sizing: border-box;
	.title {
		text-align: center;
		margin: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #ddd;
	}
	@media screen and (max-width:769px) {
		margin: 0 0;
		width: 100%;
	}
`

export const CategoryItem = styled.div`
	width: 100%;
	height: 30px;
	&:first-of-type {
		margin-top: 20px;
	}
	text-align: center;
	a {
		color: #333;
	}
`

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 50px;
	width: 48px;
	height: 48px;
	line-height: 48px;
	text-align: center;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 12px;
	cursor: pointer;
	@media screen and (max-width:769px) {
		display: none;
	}
`
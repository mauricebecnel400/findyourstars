import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	font-size: 2em;
`;	

export const StarContainer = styled.canvas`
	position: absolute;
	width: 100vw;
	height: 100vh;
`;

export const LoadingStar = styled.div`
	@keyframes fys-load {
		0% {
			transform: scale(0.5);
		}
		50% {
			transform: scale(1);
		}
		100% {
			transform: scale(0.5);
		}
	}
	margin: 0 auto;
	width: 200px;
	display: flex;

	& svg {
		margin: 0 auto;
		font-size: 2em;
		animation: fys-load 2s infinite;
	}
	padding-bottom: 12px;
	color: #FFFFAA;
	opacity: 0.7;
`;

export const LoaderWrapper = styled.div`
	margin: 0 auto;
	width: 90%;
	max-width: 500px;
	height: 6px;
	border: 1px solid #FFFFAA;
	border-radius: 8px;
	opacity: ${props => (props.visible ? 1 : 0)};
	transition: opacity 1s;
	opacity: 0.7;
`;

export const LoaderInner = styled.div`
	width: ${props => props.perc || 0}%;
	height: 100%;
	background-color: #FFFFAA;
	border-radius: 8px;
	transition: width 2s;
`;

export const LoadingText = styled.div`
	text-align: center;
	padding-top: 8px;
	font-size: 0.3em;
	opacity: ${props => (props.visible ? 1 : 0)};
	transition: opacity 1s;
	color: #FFFFAA;
`;

export const LoadingData = styled.div`
	animation: fadeInComp 4s;
	width: 100%;
	margin: 0 auto;
	text-align: center;

	@keyframes logoAnimation {
		0% {
			transform: TranslateY(0);
			opacity: 1;
		}
		25% {
			transform: TranslateY(0);
			opacity: 1;
		}
		100% {
			transform: TranslateY(0px);
			opacity: 0.7;
		}
	}

	& img {
		animation: logoAnimation 3s forwards;
		max-width: ${props => (props.large ?  '90%' : '700px')};
		width: ${props => (props.large ?  '100%' : '90%')};
		margin: auto;
		transition: 1.5s;
	}
`;
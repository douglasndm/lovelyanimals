import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
	contentInsetAdjustmentBehavior: 'automatic',
	alwaysBounceVertical: true,
	contentContainerStyle: {
		flexGrow: 1,
	},
}))``;

export const Content = styled.View`
	background-color: #ffffff;
	border-radius: 12px;
	margin: 0 20px;
	padding: 15px;
`;

export const Input = styled.TextInput`
	margin: 0 10px 10px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 10px;
	color: #000;
`;

export const Label = styled.Text`
	font-size: 14px;
	color: #000000;
	margin: 5px 10px;
`;

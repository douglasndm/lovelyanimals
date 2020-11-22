import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 15px;
`;

export const LoadingComponent = styled.ActivityIndicator.attrs({
    size: 48,
    color: '#14ded0',
})``;

export const LoadingText = styled.Text`
    font-size: 18px;
    margin-top: 15px;
    color: #14ded0;
`;

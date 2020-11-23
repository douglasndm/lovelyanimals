import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const FullSizePhoto = styled.Image.attrs({
    resizeMode: 'cover',
})`
    width: 450px;
    height: 450px;
`;

export const TextContainer = styled.View`
    margin: 10px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;

export const UserName = styled.Text`
    font-size: 18px;
`;

export const Description = styled.Text`
    font-size: 16px;
    margin: 5px 10px;
`;

export const Button = styled(RectButton)`
    background: #14ded0;
    align-items: center;
    align-self: center;

    border-radius: 12px;
    padding: 22px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
`;

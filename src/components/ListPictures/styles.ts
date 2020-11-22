import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 10px 15px;
`;

export const ListTitle = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 24px;
`;

export const List = styled.FlatList`
    margin-top: 10px;
`;

export const AnimalImage = styled.Image`
    width: 125px;
    height: 125px;
    margin-right: 10px;
    border-radius: 12px;
`;

export const SeeMoreButton = styled(RectButton)`
    align-self: flex-end;
    padding: 7px;
`;

export const SeeMoreText = styled.Text`
    font-family: 'Roboto-Regular';
    color: #a1d034;
    font-size: 19px; ;
`;

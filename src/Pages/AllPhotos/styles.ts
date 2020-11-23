import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const List = styled.FlatList`
    margin: 0 10px;
`;

export const PhotoContainer = styled(RectButton)``;

export const Photo = styled.Image`
    height: 125px;
    width: 125px;
    margin: 5px;
`;

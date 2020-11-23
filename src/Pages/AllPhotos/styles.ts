import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View``;

export const Header = styled.View`
    margin: 10px 0;

    flex-direction: row;
    align-items: center;
`;

export const BackButton = styled(RectButton)``;

export const BackButtonImage = styled(Ionicons).attrs({
    name: 'arrow-back-outline',
    size: 32,
})``;

export const PageTitle = styled.Text`
    margin-left: 10px;
    font-size: 30px;
    font-weight: bold;
`;

export const List = styled.FlatList`
    margin: 0 10px;
`;

export const PhotoContainer = styled(RectButton)``;

export const Photo = styled.Image`
    height: 125px;
    width: 125px;
    margin: 5px;
`;

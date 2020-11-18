import styled from 'styled-components/native';

import backgroundImage from '../../Assets/Images/headerBackground.jpg';

export const Container = styled.View``;

export const Header = styled.View``;

export const HeaderBackground = styled.ImageBackground.attrs({
    source: backgroundImage,
    resizeMode: 'cover',
})`
    height: 300px;
`;

export const TextContainer = styled.View`
    bottom: 0;
    position: absolute;
    margin: 0 0 10px 10px;
`;

export const AppTitle = styled.Text`
    font-family: 'Sacramento-Regular';
    color: #fff;
    font-size: 49px;
`;

export const AppDescription = styled.Text`
    font-family: 'RobotoSlab-Regular';
    color: #fff;
    font-size: 16px;
`;

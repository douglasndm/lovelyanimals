import styled from 'styled-components/native';

import backgroundImage from '../../assets/Images/headerBackground.jpg';

export const Container = styled.ScrollView``;

export const Header = styled.View``;

export const HeaderBackground = styled.ImageBackground.attrs({
    source: backgroundImage,
    resizeMode: 'cover',
})`
    height: 220px;
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

export const DonateContainer = styled.View`
    margin: 10px 15px;
`;

export const DonateTitle = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 24px;
    margin-bottom: 10px;
`;

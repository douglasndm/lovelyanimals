import styled from 'styled-components/native';

import paw from '../../assets/Images/paw.png';

export const Container = styled.ScrollView``;

export const Header = styled.View`
    background: ${props => props.theme.colors.accent};
    padding: 10px;
    margin: 15px 0;
    align-self: flex-start;
    border-top-right-radius: 17px;
    border-bottom-right-radius: 17px;
`;

export const LogoContainer = styled.View`
    flex-direction: row;
`;

export const PawImage = styled.Image.attrs({
    source: paw,
})`
    height: 45px;
    width: 45px;
    margin: 5px 10px 5px 0;
`;

export const AppTitle = styled.Text`
    align-self: center;
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

import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    padding: 15px;
    margin: 10px 0 0 0;

    background: #49e9cc;
    border-radius: 12px;
`;

export const InstitutionTitle = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;

export const InstitutionAddress = styled.Text`
    font-size: 16px;
    color: #fff;
`;
export const InstitutionDescription = styled.Text`
    font-size: 16px;
    color: #fff;
`;

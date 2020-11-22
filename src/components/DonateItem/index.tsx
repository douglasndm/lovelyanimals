import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import {
    Container,
    InstitutionTitle,
    InstitutionAddress,
    InstitutionDescription,
} from './styles';

interface Props {
    name: string;
    address: string;
    description: string;
    navigateToUrl: string;
}

const DonateItem: React.FC<Props> = ({
    name,
    address,
    description,
    navigateToUrl,
}: Props) => {
    const handleOpenLink = useCallback(() => {
        Linking.openURL(navigateToUrl);
    }, [navigateToUrl]);

    return (
        <Container onPress={handleOpenLink}>
            <InstitutionTitle>{name}</InstitutionTitle>
            <InstitutionAddress>{address}</InstitutionAddress>
            <InstitutionDescription>{description}</InstitutionDescription>
        </Container>
    );
};

export default DonateItem;

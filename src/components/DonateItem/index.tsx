import React from 'react';

import {
    Container,
    InstitutionTitle,
    InstitutionAddress,
    InstitutionDescription,
} from './styles';

const DonateItem: React.FC = () => {
    return (
        <Container>
            <InstitutionTitle>Casa dos anjos</InstitutionTitle>
            <InstitutionAddress>
                Rua ABC, número 123, bairro, cidade, estado
            </InstitutionAddress>
            <InstitutionDescription>
                ASDPOK ASPODK ASPDOK ASPODK ASPDOK ASPODK ASPODK ASDPK
            </InstitutionDescription>
        </Container>
    );
};

export default DonateItem;

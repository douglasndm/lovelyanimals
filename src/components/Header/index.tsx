import React from 'react';

import { Container, BackButton, BackButtonImage, PageTitle } from './styles';

interface Props {
    backButtonOnPress: () => {};
    pageTitle: string;
}

const Header: React.FC<Props> = ({ backButtonOnPress, pageTitle }: Props) => {
    return (
        <Container>
            <BackButton onPress={backButtonOnPress}>
                <BackButtonImage />
            </BackButton>

            <PageTitle>{pageTitle}</PageTitle>
        </Container>
    );
};

export default Header;

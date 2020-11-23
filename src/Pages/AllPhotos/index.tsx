import React from 'react';

import {
    Container,
    Header,
    BackButton,
    BackButtonImage,
    PageTitle,
} from './styles';

const AllPhotos: React.FC = () => {
    return (
        <Container>
            <Header>
                <BackButton>
                    <BackButtonImage />
                </BackButton>

                <PageTitle>Todas as fotos</PageTitle>
            </Header>
        </Container>
    );
};

export default AllPhotos;

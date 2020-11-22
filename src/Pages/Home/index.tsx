import React from 'react';

import ListPictures from '../../components/ListPictures';
import DonateItem from '../../components/DonateItem';

import {
    Container,
    Header,
    HeaderBackground,
    TextContainer,
    AppTitle,
    AppDescription,
    DonateContainer,
    DonateTitle,
} from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header>
                <HeaderBackground>
                    <TextContainer>
                        <AppTitle>Lovely Animals</AppTitle>
                        <AppDescription>
                            A place to find cutie animals
                        </AppDescription>
                    </TextContainer>
                </HeaderBackground>
            </Header>

            <ListPictures />
            <ListPictures />
            <ListPictures />
            <ListPictures />
            <ListPictures />
            <ListPictures />

            <DonateContainer>
                <DonateTitle>Ajude com doações</DonateTitle>
                <DonateItem />
                <DonateItem />
                <DonateItem />
                <DonateItem />
                <DonateItem />
            </DonateContainer>
        </Container>
    );
};

export default Home;

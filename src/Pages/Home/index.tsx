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

            <ListPictures title="cuties" searchFor="cute dog" limit={20} />
            <ListPictures title="happy" searchFor="happy dog" limit={20} />
            <ListPictures title="funny" searchFor="funny dog" limit={20} />

            <DonateContainer>
                <DonateTitle>Ajude com doações</DonateTitle>
                <DonateItem
                    name="Casa dos anjos"
                    address="Macaé-RJ"
                    description="Abrigo para animais resgatados a procura de um lar responsável."
                    navigateToUrl="http://petdote.com.br/"
                />
            </DonateContainer>
        </Container>
    );
};

export default Home;

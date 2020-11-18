import React from 'react';

import {
    Container,
    Header,
    HeaderBackground,
    TextContainer,
    AppTitle,
    AppDescription,
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
        </Container>
    );
};

export default Home;

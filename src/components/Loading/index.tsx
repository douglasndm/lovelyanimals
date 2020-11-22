import React from 'react';

import { Container, LoadingComponent, LoadingText } from './styles';

const Loading: React.FC = () => {
    return (
        <Container>
            <LoadingComponent />
            <LoadingText>Carregando...</LoadingText>
        </Container>
    );
};

export default Loading;

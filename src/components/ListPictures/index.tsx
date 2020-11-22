import React, { useCallback } from 'react';

import {
    Container,
    ListTitle,
    List,
    AnimalImage,
    SeeMoreButton,
    SeeMoreText,
} from './styles';

const ListPictures: React.FC = () => {
    const data = [
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
        {
            url: require('../../assets/Images/6tag-22065633-907853896847321313_22065633.jpg'),
        },
    ];

    const renderAnimalImage = useCallback(({ item }) => {
        return <AnimalImage source={item.url} />;
    }, []);

    return (
        <Container>
            <ListTitle>cuties</ListTitle>

            <List
                data={data}
                keyExtractor={(item, index) => String(index)}
                renderItem={renderAnimalImage}
                horizontal
            />

            <SeeMoreButton>
                <SeeMoreText>see all</SeeMoreText>
            </SeeMoreButton>
        </Container>
    );
};

export default ListPictures;

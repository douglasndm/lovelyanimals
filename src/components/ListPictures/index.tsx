import React, { useCallback, useEffect, useState } from 'react';

import Flickr, { getImageUrl } from '../../services/flickr';

import Loading from '../Loading';

import {
    Container,
    ListTitle,
    List,
    AnimalImage,
    SeeMoreButton,
    SeeMoreText,
} from './styles';

interface RenderItemProps {
    item: FlickrImage;
}

const ListPictures: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [animalsPhotos, setAnimalsPhotos] = useState<Array<FlickrImage>>([]);

    const getData = useCallback(async () => {
        setIsLoading(true);
        const response = await Flickr.get('/', {
            params: {
                method: 'flickr.photos.search',
                tags: 'cutie dog',
                per_page: 10,
            },
        });

        const photosWithUrls = response.data.photos.photo.map(picture =>
            getImageUrl(picture),
        );

        setAnimalsPhotos(photosWithUrls);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    const renderAnimalImage = useCallback(({ item }: RenderItemProps) => {
        return <AnimalImage source={{ uri: item.image_urls.medium }} />;
    }, []);

    return isLoading ? (
        <Loading />
    ) : (
        <Container>
            <ListTitle>cuties</ListTitle>

            <List
                data={animalsPhotos}
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

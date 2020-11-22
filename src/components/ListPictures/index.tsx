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

interface Props {
    title: string;
    searchFor: string;
    limit?: number;
}

const ListPictures: React.FC<Props> = ({ title, searchFor, limit }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [animalsPhotos, setAnimalsPhotos] = useState<Array<FlickrImage>>([]);

    const getData = useCallback(async () => {
        setIsLoading(true);
        const response = await Flickr.get('/', {
            params: {
                method: 'flickr.photos.search',
                tags: searchFor,
                per_page: limit || 15,
            },
        });

        const photosWithUrls = response.data.photos.photo.map(
            (picture: FlickrResultFile) => getImageUrl(picture),
        );

        setAnimalsPhotos(photosWithUrls);
        setIsLoading(false);
    }, [searchFor, limit]);

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
            <ListTitle>{title}</ListTitle>

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

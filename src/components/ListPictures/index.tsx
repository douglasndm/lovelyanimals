import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Flickr, { getImageUrl } from '../../services/flickr';

import Loading from '../Loading';

import {
    Container,
    ListTitle,
    List,
    PhotoContainer,
    AnimalImage,
    SeeMoreButton,
    SeeMoreText,
} from './styles';

interface RenderItemProps {
    item: FlickrImage;
}

interface PhotoClickProps {
    photo_id: string;
    secret: string;
}

interface Props {
    title: string;
    searchFor: string;
    limit?: number;
}

const ListPictures: React.FC<Props> = ({ title, searchFor, limit }: Props) => {
    const { navigate } = useNavigation();

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

    const handlePhotoClick = useCallback(
        ({ photo_id, secret }: PhotoClickProps) => {
            navigate('PhotoView', {
                photo_id,
                secret,
            });
        },
        [navigate],
    );

    const renderAnimalImage = useCallback(
        ({ item }: RenderItemProps) => {
            return (
                <PhotoContainer
                    onPress={() =>
                        handlePhotoClick({
                            photo_id: item.photo_id,
                            secret: item.secret,
                        })
                    }
                >
                    <AnimalImage source={{ uri: item.image_urls.medium }} />
                </PhotoContainer>
            );
        },
        [handlePhotoClick],
    );

    const handleSeeAllPhotosClick = useCallback(() => {
        navigate('AllPhotos', {
            searchFor,
        });
    }, [navigate, searchFor]);

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

            <SeeMoreButton onPress={handleSeeAllPhotosClick}>
                <SeeMoreText>ver todas</SeeMoreText>
            </SeeMoreButton>
        </Container>
    );
};

export default ListPictures;

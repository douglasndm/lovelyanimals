import React, { useEffect, useCallback, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Alert } from 'react-native';
import Flickr, { getImageUrl } from '../../services/flickr';

import {
    Container,
    Header,
    BackButton,
    BackButtonImage,
    PageTitle,
    List,
    PhotoContainer,
    Photo,
} from './styles';

interface Props {
    searchFor: string;
}

interface handlePhotoClickProps {
    photo_id: string;
    secret: string;
}

interface renderItemProps {
    item: FlickrImage;
}

const AllPhotos: React.FC = () => {
    const { goBack, navigate } = useNavigation();

    const Route = useRoute();
    const routeParams = Route.params as Props;

    const [photos, setPhotos] = useState<Array<FlickrImage>>([]);
    const [page, setPage] = useState<number>(1);

    const loadData = useCallback(async () => {
        const response = await Flickr.get('/', {
            params: {
                method: 'flickr.photos.search',
                tags: routeParams.searchFor,
                per_page: 50,
                page: 1,
            },
        });

        const data = response.data.photos.photo.map(p => getImageUrl(p));

        setPhotos(data);
    }, [routeParams]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const handlePhotoClick = useCallback(
        ({ photo_id, secret }: handlePhotoClickProps) => {
            navigate('PhotoView', {
                photo_id,
                secret,
            });
        },
        [navigate],
    );

    const renderItem = useCallback((item: renderItemProps) => {
        return (
            <PhotoContainer
                onPress={() =>
                    handlePhotoClick({
                        photo_id: item.item.photo_id,
                        secret: item.item.secret,
                    })
                }
            >
                <Photo
                    key={item.item.photo_id}
                    source={{ uri: item.item.image_urls.medium }}
                />
            </PhotoContainer>
        );
    }, []);

    return (
        <Container>
            <List
                data={photos}
                ListHeaderComponent={() => (
                    <Header>
                        <BackButton onPress={goBack}>
                            <BackButtonImage />
                        </BackButton>

                        <PageTitle>Todas as fotos</PageTitle>
                    </Header>
                )}
                numColumns={3}
                keyExtractor={(item, index) => String(index)}
                onEndReached={() => setPage(page + 1)}
                renderItem={renderItem}
            />
        </Container>
    );
};

export default AllPhotos;

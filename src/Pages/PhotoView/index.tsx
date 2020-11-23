import React, { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import flickr, { getImageUrl } from '../../services/flickr';

import {
    Container,
    FullSizePhoto,
    TextContainer,
    Title,
    UserName,
    Description,
    Button,
    ButtonText,
} from './styles';

interface Props {
    photo_id: string;
    secret: string;
}

const PhotoView: React.FC = () => {
    const { goBack } = useNavigation();

    const Route = useRoute();
    const routeParams = Route.params as Props;

    const [photo, setPhoto] = useState<FlickrImageInfo>();
    const [image, setImage] = useState<FlickrImage>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const loadData = useCallback(async () => {
        setIsLoading(true);
        const response = await flickr.get('/', {
            params: {
                method: 'flickr.photos.getInfo',
                photo_id: routeParams.photo_id,
                secret: routeParams.secret,
            },
        });

        setPhoto(response.data.photo);
        setIsLoading(false);
    }, [routeParams]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    useEffect(() => {
        if (!photo) {
            return;
        }

        const photoFlickrFormat: FlickrResultFile = {
            id: photo.id,
            secret: photo.secret,
            server: photo.server,

            farm: '',
            owner: '',
            title: '',
        };

        const img = getImageUrl(photoFlickrFormat);

        setImage(img);
    }, [photo]);

    const handleOpenPhotoOnFlickr = useCallback(() => {
        if (photo?.urls.url[0]._content)
            Linking.openURL(photo?.urls.url[0]._content);
    }, [photo]);

    return isLoading ? (
        <Loading />
    ) : (
        <Container>
            <Header pageTitle="foto" backButtonOnPress={goBack} />
            {image && (
                <FullSizePhoto source={{ uri: image.image_urls.large }} />
            )}
            <TextContainer>
                <Title>{photo?.title.content || 'No title'}</Title>
                <UserName>
                    {photo?.owner.realname} (@{photo?.owner.username}) on Flickr
                </UserName>
                <Description>{photo?.description.content}</Description>
            </TextContainer>

            {!!photo?.urls.url.length && (
                <Button onPress={handleOpenPhotoOnFlickr}>
                    <ButtonText>Abrir foto no Flickr</ButtonText>
                </Button>
            )}
        </Container>
    );
};

export default PhotoView;

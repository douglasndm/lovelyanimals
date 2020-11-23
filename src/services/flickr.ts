import axios from 'axios';
import EnvConfig from 'react-native-config';

export function getImageUrl(flickrFile: FlickrResultFile): FlickrImage {
    const image: FlickrImage = {
        title: flickrFile.title,

        photo_id: flickrFile.id,
        secret: flickrFile.secret,

        image_urls: {
            small: `https://live.staticflickr.com/${flickrFile.server}/${flickrFile.id}_${flickrFile.secret}_w.jpg`,
            medium: `https://live.staticflickr.com/${flickrFile.server}/${flickrFile.id}_${flickrFile.secret}_c.jpg`,
            large: `https://live.staticflickr.com/${flickrFile.server}/${flickrFile.id}_${flickrFile.secret}_b.jpg`,
        },
    };

    return image;
}

const flickr = axios.create({
    baseURL: 'https://api.flickr.com/services/rest/',
    params: {
        api_key: EnvConfig.FLICKER_API_KEY,
        format: 'json',
        nojsoncallback: 1,
    },
});

export default flickr;

interface FlickrImage {
    title: string;

    photo_id?: string;
    secret?: string;

    image_urls: {
        small: string;
        medium: string;
        large: string;
    };
}

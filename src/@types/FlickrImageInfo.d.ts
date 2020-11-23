interface FlickrImageInfo {
    id: string;
    secret: string;
    server: string;
    farm: string;

    owner: {
        username: string;
        realname: string;
    };

    title: {
        content: string;
    };
    description: {
        content: string;
    };

    dates: {
        posted: string;
        taken: string;
    };

    urls: {
        url: [
            {
                _content: string;
            },
        ];
    };
}

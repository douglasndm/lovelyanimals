import React, { useCallback } from 'react';

import Header from '@components/header';
import PhotosList from '@components/listanimals';

import { Container, PageContent, PhotosContainer, PhotosTitleContainer, PhotosTitle } from './styles';

interface Props {
  currentView: 'Cat' | 'Dog' | 'Menu';
}

const home: React.FC<Props> = ({ currentView } : Props) => {
  const photos: NodeRequire[] = [];

  for (let i = 0; i < 20; i++) {
    photos.push(require('@assets/images/FB_IMG_1489097250499.jpg'));
  }

  const ListHeader = useCallback(() => {
    return (
      <>
        <Header currentPageTitle={currentView} />

        <PhotosTitleContainer>
            <PhotosTitle>Cuties {currentView} photos</PhotosTitle>
          </PhotosTitleContainer>
      </>
    );
  }, [currentView]);

  return (
    <Container>
      <PageContent>
        <PhotosContainer>
          <PhotosList ListHeaderComponent={ListHeader} images={photos} />
        </PhotosContainer>
      </PageContent>
    </Container>);
};

export default home;

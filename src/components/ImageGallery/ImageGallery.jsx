import React from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ searchResult, handleOpenModal }) => {
  return (
    <Gallery>
      {Array.isArray(searchResult) && searchResult.length > 0 && 
        searchResult.map(({ id, tags, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            tags={tags}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            handleOpenModal={handleOpenModal}
          />
        ))}
    </Gallery>
  );
};

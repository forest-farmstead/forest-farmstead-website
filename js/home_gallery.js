import React from 'react';
import Gallery from './components/Gallery';

const HOMEGALLERY_IMAGE_SET = [
  {
    src: './images/gallery/chicks.jpg',
    thumbnail: './images/gallery/chicks_thumb.png'
  },
  {
    src: './images/gallery/fog.jpg',
    thumbnail: './images/gallery/fog_thumb.png'
  },
  {
    src: './images/gallery/forest.jpg',
    thumbnail: './images/gallery/forest_thumb.png'
  },
  {
    src: './images/gallery/goats.jpg',
    thumbnail: './images/gallery/goats_thumb.png'
  },
  {
    src: './images/gallery/goats2.jpg',
    thumbnail: './images/gallery/goats2_thumb.png'
  },
  {
    src: './images/gallery/mountains.jpg',
    thumbnail: './images/gallery/mountains_thumb.png'
  },
  {
    src: './images/gallery/skagit.jpg',
    thumbnail: './images/gallery/skagit_thumb.png'
  }
];

export default class HomeGallery extends Gallery {
  render() {
    return (
      <Gallery
        images={HOMEGALLERY_IMAGE_SET}
      />
    );
  }
}

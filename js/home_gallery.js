import React from 'react';
import Gallery from './components/Gallery';

const HOMEGALLERY_IMAGE_SET = [
  {
    src: './images/gallery/chicks.jpg',
    caption: 'Chicks doing some hatching.'
  },
  {
    src: './images/gallery/fog.jpg',
    caption: 'Fog obscuring the lower slopes of Tiller\'s Top.'
  },
  {
    src: './images/gallery/forest.jpg',
    caption: 'The forest behind the farm.'
  },
  {
    src: './images/gallery/goats.jpg',
    caption: 'Goats exhibiting their preference for high places.'
  },
  {
    src: './images/gallery/goats2.jpg',
    caption: 'More tomfoolery from the goats.'
  },
  {
    src: './images/gallery/mountains.jpg',
    caption: 'Kulshan a.k.a. Mount Baker, as viewed from the slopes of nearby Sauk Mountain.'
  },
  {
    src: './images/gallery/skagit.jpg',
    caption: 'Just another sunny day in the upper Skagit Valley.'
  }
].map((img) => ({...img, thumbnail: img.src + '.thumb' }));

export default class HomeGallery extends Gallery {
  render() {
    return (
      <Gallery
        images={HOMEGALLERY_IMAGE_SET}
      />
    );
  }
}

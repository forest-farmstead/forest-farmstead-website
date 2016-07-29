import React from 'react';
import Gallery from './components/Gallery';

const HOMEGALLERY_IMAGE_DIR = './images/gallery/';

const HOMEGALLERY_IMAGE_SET = [
  {
    name: 'chicks.jpg',
    caption: 'Chicks doing some hatching.'
  },
  {
    name: 'fog.jpg',
    caption: 'Fog obscuring the lower slopes of Tiller\'s Top.'
  },
  {
    name: 'forest.jpg',
    caption: 'The forest behind the farm.'
  },
  {
    name: 'goats.jpg',
    caption: 'Goats exhibiting their preference for high places.'
  },
  {
    name: 'goats2.jpg',
    caption: 'More tomfoolery from the goats.'
  },
  {
    name: 'mountains.jpg',
    caption: 'Kulshan a.k.a. Mount Baker, as viewed from the slopes of nearby Sauk Mountain.'
  },
  {
    name: 'skagit.jpg',
    caption: 'Just another sunny day in the upper Skagit Valley.'
  }
  // ,{
  //   name: 'river.jpg',
  //   caption: 'The nearby Skagit River, an invaluable refuge from warm summer days'
  // }
].map((img) => ({...img, src: HOMEGALLERY_IMAGE_DIR + img.name, thumbnail: HOMEGALLERY_IMAGE_DIR + img.name + '.thumb'}));

export default class HomeGallery extends Gallery {
  render() {
    return (
      <Gallery
        images={HOMEGALLERY_IMAGE_SET}
      />
    );
  }
}

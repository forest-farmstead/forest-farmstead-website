import React from 'react';
import Gallery from './components/Gallery';

const HOMEGALLERY_IMAGE_DIR = '/images/gallery/';

const HOMEGALLERY_IMAGE_SET = [
  {
    name: 'chicks.jpg',
    caption: 'Newborns in the brooder box.'
  },
  {
    name: 'fog.jpg',
    caption: 'Fog obscuring the lower slopes of Tiller\'s Top, the mountain behind our property.'
  },
  {
    name: 'forest.jpg',
    caption: 'A scene from within our forest canopy.'
  },
  {
    name: 'goats.jpg',
    caption: 'Goats displaying their preference for high places.'
  },
  {
    name: 'goats2.jpg',
    caption: 'More tomfoolery from the goats.'
  },
  {
    name: 'mountains.jpg',
    caption: 'The western Cascades and Sauk River Valley from the slopes of nearby Sauk Mountain.'
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

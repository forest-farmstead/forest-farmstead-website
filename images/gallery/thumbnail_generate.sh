#!/bin/sh
# Removes any thumbnails matching the *.jpg.thumb pattern
# Crops any remaining .jpg files to center the image in a square frame and
#   outputs in filename.jpg.thumb format
# Resizes those files to 300px x 300px and saves to same filenames

rm -f *.thumb

convert *.jpg \
    -set option:distort:viewport \
    "%[fx:min(w,h)]x%[fx:min(w,h)]+%[fx:max((w-h)/2,0)]+%[fx:max((h-w)/2,0)]" \
    -filter point \
    -distort SRT 0 \
    +repage \
    -set filename:name "%t" \
     JPG:'%[filename:name].jpg.thumb'

mogrify -resize 300x300 *.jpg.thumb

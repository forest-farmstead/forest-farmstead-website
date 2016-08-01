#!/bin/sh
# Resizes all .jpg images to a max of 2000px x 1200px, original aspect ratio
#   preserved.

mogrify -resize 2000x1200 *.jpg

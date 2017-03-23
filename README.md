# Adding new photos to the photo gallery on the About page
1. Add the photo to the `images/gallery/` folder
2. Open `js/home_gallery.js` and modify the `HOMEGALLERY_IMAGE_SET` array. Add the following code to the end of the array (right before `].map`):

```
{
    name: 'picturename.jpg',
    caption: 'Caption for picture'
}
```
3. Once saved, the picture should show up. Note that the gallery is currently designed to hold 7 pictures, adding more pictures may create a new row, or may result in pictures that do not show up as thumbnails

# Adding a new product to the website

1. Add a new page for the product. Copy the contents of `products/new_product.jade` into a new file in the `products/` folder named `productname.jade`. Instructions for filling out the new `productname.jade` file are included
2. Add the product to the menubar by modifying `includes/menu_products.jade`. Instructions are inside that file
3. Add the product to the products page by modifying `products/index.jade`. Instructions are enclosed

### Notes
- `productname.jade` becomes `productname.html` when it is compiled to become part of the website. Therefore, when you fill out links in `menu_products.jade` and `products/index.jade` which link to the product's page, the links will be of the form `products/productname.html`
- The image you use for the product background should be no wider than around 1280px, otherwise the large size of the image will make the page load slowly
- The image you use for the sidebar should relatively small, I would recommend keeping the width of the image around 480px
- Some products you might want to sell in multiple quantities. In this case, you should play around with the +sidebar() part - perhaps list the cost of one quantity, but then also indicate that multiple quantities are available

# Adding a new blog post

1. All blog posts live in the `blog/_posts` folder. Each blog post is its own Markdown (.md) file. Markdown is a markup language that makes it really easy to write HTML. Writing Markdown is basically the same as writing in a normal text editor except that you use special symbols to write headers, bold, underlined, italicized text, links, and images.
2. To create a new blog post, make a file in the `blog/_posts` folder. It must follow a strict naming convention: to write a post on March 1st, 2017 named "Example Post", the filename should be `2017-03-01-example-post.md`.
3. Follow the convention of other posts in the folder: make sure to give the post a title and author using the same block of text (beginning and ending with "---") used by other posts.
4. Upon saving this file in Github, the blog post will become live

## Including images in a blog post

To be continued...

# Other edits to the website:

## Locations of code for pages:
About page => `about/index.jade`

Carbon page => `carbon/index.jade`

Products index, and product pages => `products/` folder

Woodcutters page => `woodcutters/index.jade`

Recipes page => `woodcutters/recipes.jade`

Experience page => `wwoof/index.jade`


## Images folder
`images/backgrounds/` contains backgrounds for pages. Max width should be ~1280px

`images/gallery/` contains photos for the gallery on the about page

`images/products/` contains images used in the products sidebar

`images/recipes/` contains images used on the recipes page

All other photos in the `images/` folder are use for other random stuff around the website

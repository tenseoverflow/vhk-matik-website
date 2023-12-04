# VHKmatik-Website

Created using https://entu.site/

## Requirements

Up to date versions of: NPM, Node.js and bash

## Installation

NPM is the recommended installation method. To install Entu SSG run:
```shell
npm install entu-ssg
```

## Usage

To build the site run:
```shell
npm run build
```

To host the site locally run:
```shell
npm run serve
```
The website will be running on port 4000 so you can check it here: [http://localhost:4000/](http://localhost:4000)

### Blog posts

To add a blog post create a new **.md** file in the ```blog_posts_et```(estonian) or ```blog_posts_en```(english) folder, depending on language.\
The file name **needs** to be ```[number]_[date].md```.\
The number is for ordering the blog posts (biggest number means newest post - placed on top).\
The date is added to the blog post as publish date (it should be formatted like: ```[day]. [month] [year]```).\
Example: ```13_5. December 2023.md``` (```13_5. detsember 2023.md``` for estonian file).

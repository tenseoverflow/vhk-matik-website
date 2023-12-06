#empty dist folder
rm -rf ./dist/*

# create folders
mkdir -p ./compile_dir

# copy assets folder to dist
mkdir -p ./dist/assets
cp -r ./src/assets ./dist/

# run prebuild scripts
node ./prebuild_scripts/prebuild_blog.en.js
node ./prebuild_scripts/prebuild_blog.et.js

# serve
entu-ssg serve config.yaml full

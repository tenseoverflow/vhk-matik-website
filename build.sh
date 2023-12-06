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

# build
entu-ssg build config.yaml full
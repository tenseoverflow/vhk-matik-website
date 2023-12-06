#empty dist folder
rm -rf ./dist/*

# create folders
mkdir -p ./compile_dir

# copy assets folder to dist
mkdir -p ./dist/_assets
cp -r ./src/_assets ./dist/
echo "Assets copied to dist"
# echo contents of dist folder recursively
ls -R ./dist/

# run prebuild scripts
node ./prebuild_scripts/prebuild_blog.en.js
node ./prebuild_scripts/prebuild_blog.et.js

# build
entu-ssg build config.yaml full
# run prebuild scripts
node ./prebuild_scripts/prebuild_blog.en.js
node ./prebuild_scripts/prebuild_blog.et.js

# build
rm -rf ./dist/*
entu-ssg build config.yaml full
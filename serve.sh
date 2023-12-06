# create folders
mkdir -p ./compile_dir

# run prebuild scripts
node ./prebuild_scripts/prebuild_blog.en.js
node ./prebuild_scripts/prebuild_blog.et.js

# serve
rm -rf ./dist/*
entu-ssg serve config.yaml full
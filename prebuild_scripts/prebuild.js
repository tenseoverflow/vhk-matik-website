const fs = require('fs');
const { execSync } = require('child_process');

// Empty dist folder
fs.rmSync('./dist', { recursive: true, force: true });
fs.mkdirSync('./dist', { recursive: true });

// Create folders
fs.mkdirSync('./compile_dir', { recursive: true });

// Copy assets folder to dist
fs.mkdirSync('./dist/assets', { recursive: true });
fs.cpSync('./src/assets', './dist/assets', { recursive: true });

// Run prebuild scripts
execSync('node ./prebuild_scripts/prebuild_blog.en.js', { stdio: 'inherit' });
execSync('node ./prebuild_scripts/prebuild_blog.et.js', { stdio: 'inherit' });

// Build
// execSync('entu-ssg build config.yaml full', { stdio: 'inherit' });
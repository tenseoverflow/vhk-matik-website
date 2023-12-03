const path = require('path');
process.chdir(path.dirname(__filename));
const scriptdir = process.cwd();

const fs = require('fs');
const blogPosts = './../blog_posts_en';
const compileYaml = './../compile_dir/articles.en.yaml';

// read file names in format 'number_title.md'
const blogPostFiles = fs.readdirSync(blogPosts).filter(file => path.extname(file) === '.md');

// order files by number
blogPostFiles.sort((a, b) => {
    const aNumber = parseInt(a.split('_')[0]);
    const bNumber = parseInt(b.split('_')[0]);
    return aNumber - bNumber;
}); 

fs.writeFileSync(compileYaml, '');

for (let i = 0; i < blogPostFiles.length; i++) {
    const file = blogPostFiles[i];
    const filePath = path.join(blogPosts, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const indentedContent = fileContent.split('\n').map(line => '  ' + line).join('\n');
    const yamlContent = `-\n  '\n${indentedContent}'\n`;
    fs.appendFileSync(compileYaml, yamlContent);
}

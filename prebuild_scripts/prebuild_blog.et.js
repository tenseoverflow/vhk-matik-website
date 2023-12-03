const path = require('path');
process.chdir(path.dirname(__filename));
const scriptdir = process.cwd();

const fs = require('fs');
const blogPosts = './../blog_posts_et';
const compileYaml = './../compile_dir/articles.et.yaml';

const blogPostFiles = fs.readdirSync(blogPosts).filter(file => path.extname(file) === '.md');
fs.writeFileSync(compileYaml, '');

for (let i = 0; i < blogPostFiles.length; i++) {
    const file = blogPostFiles[i];
    const filePath = path.join(blogPosts, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // BEGIN: ed8c6549bwf9
    const indentedContent = fileContent.split('\n').map(line => '  ' + line).join('\n');
    const yamlContent = `-\n  '\n${indentedContent}'\n`;
    fs.appendFileSync(compileYaml, yamlContent);
    // END: ed8c6549bwf9
}

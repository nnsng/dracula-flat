const fs = require('fs');
const path = require('path');
const generate = require('./generate');

const THEME_DIR = path.join(__dirname, '..', 'themes');

if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
}

module.exports = async () => {
    const theme = await generate();
    fs.promises.writeFile(path.join(THEME_DIR, 'dracula-flat.json'), JSON.stringify(theme, null, 4));
};

if (require.main === module) {
    module.exports();
}

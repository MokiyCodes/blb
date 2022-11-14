const lib = require('.');
const fs = require('fs');
const luamin = require('luamin');
lib('').then(res => {
  if (!process.argv.includes('--no-minify'))
    try {
      res = luamin.minify(res);
    } catch (e) {
      console.warn('Error occurred while minifying:\n', e, '\nDisable minifying using --no-minify');
    }
  fs.writeFileSync('out.lua', `-- Built at ${new Date} / Production --
${res}`);
});

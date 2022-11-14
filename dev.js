const express = require('express');
const { writeFileSync, } = require('fs');
const bundle = require('.');
const app = express();
app.all('/*.lua', async (_, rs) => {
  const final = await bundle(`-- Built at ${new Date} / Development --`);
  rs.set('content-type', 'text/plain; charset=utf-8').send(final);
  writeFileSync('out.lua', final);
});
app.listen(16969, () => console.log(`> Listening on port 16969 <
Load Using:
- Roblox Executor:
    loadstring(game:HttpGetAsync'http://127.0.0.1:16969/build.lua','devbuild.rbx')(); ${/* as provided by yielding's code */ ''}
- ComputerCraft:
    (function(rq)loadstring(rq.readAll(),'devbuild-wrapper')();rq.close();end)(http.get('https://github.com/MokiyCodes/blb/raw/main/.cc-devloader.lua'));
    --> requires changing config/computercraft.cfg to allow 127.0.0.0`));

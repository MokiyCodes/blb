| Basic Lua Bundler                                                                                      |
|--------------------------------------------------------------------------------------------------------|
| No Tree Shaking                                                                                        |
| No fancy shit                                                                                          |
| Just bundles your code                                                                                 |
| Blazingly Fast (Build times are just a handful of milliseconds)                                        |
| Stripped Fork of [Yielding](https://yieldingexploiter.github.io/)'s Personal Bundler (with permission) |
| [MIT](./LICENSE)                                                                                       |

## Installation

[An example of a barebones project using this](https://github.com/MokiyCodes/cco/tree/94f6fdb3f9ce91265dbefc1cd85de79ff4f0f503)

###### Prerequesites

1. [pnpm](https://pnpm.io)
2. nodejs (preferably installed from `pnpm env use --global latest`) >= 18
3. git

###### Installation

1. Run `git submodule add git@github.com:MokiyCodes/blb.git bundler` in your project
2. Make sure your project has a package.json
3. Add this to your package.json's scripts:
```json
"build": "node bundler/build.js",
"dev": "node bundler/dev.js"
```
4. Create a `src/index.lua` file.
5. Make sure you enter the `bundler` directory and run `pnpm i`

Note: Your entrypoint's parent dir is the only dir we look after. We do NOT bundle anything outside of it's parent dir.<br/>
Note 2: Only .lua files are bundled.<br/>
Note 3: you can require() directories if it has an index.lua inside.

## Usage

| command | description                            |
|---------|----------------------------------------|
| build   | builds into output/                    |
| dev     | starts a dev server, builds on request |

### Advanced Usage

#### Variables

You have some minimal variables available in your environment:

| var             | description                                                | example                                                |
|-----------------|------------------------------------------------------------|--------------------------------------------------------|
| __filename      | the file's name                                            | in `/src/a/b.lua`: `print(__filename)` => `a/b.lua`    |
| __dirname       | the directory's name                                       | `require(__dirname..'/test')`                          |
| __just_filename | Just the filename by itself                                | in `/src/a/b.lua`: `print(__just_filename)` => `b.lua` |
| __hash          | Hex hash of the file data                                  | `print(__hash)`                                        |
| modules         | internal list of modles, avoid using unless hotfixing shit | n / a                                                  |

# Lifx plugin for Elgato Stream Deck+

## Setup

This plugin is designed to work with my own, very-much-a-work-in-progress, local back-end API for Lifx controls. So it's not much use to anyone else yet, but if it helps you with a similar project, have at it!

### Clone the repo

```
git clone https://github.com/doubleedesign/streamdeck-plugin-lifx
```

### Symlink where Stream Deck looks for plugins

#### Windows
Using Command Prompt with admin privileges, from your project folder:

```
mklink /D C:\Users\%USERNAME%\AppData\Roaming\Elgato\StreamDeck\Plugins\com.doubleedesign.lifx.sdPlugin %cd%\src\com.doubleedesign.lifx.sdPlugin
```

**Note:** When symlinking a plugin, the folder name must end with `.sdPlugin`.


## Development

Each action has its own directory within `actions`, and inside that its event handlers are located within `index.js`. Those files are concatenated from `app.js` to `app-bundle.js` using [Rollup](https://rollupjs.org/configuration-options).  

1. Install dependencies with `npm install`
2. To run in development mode, i.e., with Rollup watching for changes, run `npm run dev`
3. When you're done and just want to update the bundle file, run `npm run build`.

[Stream Deck SDK](https://docs.elgato.com/sdk/plugins/getting-started) is included as a Git submodule.

### Creating a new action

1. Add a new object to the `Actions` array in `manifest.json` with the relevant values (the existing actions can be used for guidance re naming and file structure)
2. Create the folder and files within `actions`
3. Restart the Stream Deck app (necessary after any change to the manifest)
4. Modify the UI as per your needs in `property-inspector/inspector.html` and the handlers for it in `property-inspector/inspector.js`
5. Add your event handling code to your new action's `index.js`.

While Rollup will take care of any name clashes, I recommend giving each action constant its own name to make your `app-bundle.js` more readable for debugging purposes. e.g., `const toggleAction =` instead of `const action =`.

_**Note to self:** Automate this at some point with template files etc._

### Debugging

Please see the [SDK instructions](https://docs.elgato.com/sdk/plugins/getting-started) for debugging information.

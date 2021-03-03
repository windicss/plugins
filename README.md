# Awesome Windi CSS

Awesome things related to [Windi CSS](https://github.com/windicss/windicss)

## Plugins

### Transform API

We will collect plug-ins that can be used in [windicss](https://github.com/windicss/windicss) here. For tailwind plugins, we generally use Transform API to support them.

You can import them to your config like below:

```js
// windi.config.js

const { transform } = require('windicss/helpers');

module.exports = {
  theme: {
    ...
  },
  plugins: [
    transform('plugin-name'), // replace require with transform
  ]
}
```

### Sub Module

However [windicss](https://github.com/windicss/windicss) abandoned postcss for some benefits, and we will also lose support for the postcss interface. Therefore, for this type of plugin, we will simpily fork the code, make some modification, and republish it as a submodule of `@windicss/...`.

```js
// windi.config.js

module.exports = {
  theme: {
    ...
  },
  plugins: [
    require('@windicss/plugin-name'),
  ]
}
```

If you find some plugin that you used is not yet supported, you are welcome to post an issue or pull request, and we will support it soon.

### Plugin List

| Plugin                    | Description                                                  | Support       |
| ------------------------- | ------------------------------------------------------------ | :------------: |
| [tailwind-scrollbar](https://github.com/adoxography/tailwind-scrollbar) | Adds styling utilities for scrollbars in Firefox and webkit-based browsers. | ???           |     |
| [tailwindcss-hero-patterns](https://github.com/svengau/tailwindcss-hero-patterns) | A simple tailwind plugin to display [Hero Patterns](http://www.heropatterns.com/) | `transform('tailwindcss-hero-patterns')` |
| [tailwindcss-animate.css](https://github.com/bentzibentz/tailwindcss-animate.css) | [Animate CSS](https://github.com/animate-css/animate.css) plugin | `require('@windicss/animations')` |
| [tailwindcss-truncate-multiline](https://github.com/jhta/tailwindcss-truncate-multiline) | Tailwind CSS plugin to generate truncate multiline utilities | `transform('tailwindcss-truncate-multiline')` |
| [tailwindcss-blend-mode](https://github.com/hacknug/tailwindcss-blend-mode) | Blend-mode utilities for Tailwind CSS. | `transform('tailwindcss-blend-mode')` |
| [tailwindcss-question-mark](https://github.com/GavinJoyce/tailwindcss-question-mark) | A plugin that provides a helpful ? dev time utility. | `require(@windicss/question-mark)` |

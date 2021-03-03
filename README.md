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

However [windicss](https://github.com/windicss/windicss) abandoned postcss for some other benefits, but we will also lose support for the postcss interface. Therefore, for this type of plugin, we will simpily fork the code, make some modification, and republish it as a submodule of `@windicss/...`.

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

| Plugin                    | Description                                                  | Support       | Origin                                               |
| ------------------------- | ------------------------------------------------------------ | ------------- | ---------------------------------------------------- |
| tailwind-scrollbar        | Adds styling utilities for scrollbars in Firefox and webkit-based browsers. | ???           | https://github.com/adoxography/tailwind-scrollbar    |
| tailwindcss-hero-patterns | A simple tailwind plugin to display [Hero Patterns](http://www.heropatterns.com/) by [@steveschoger](https://twitter.com/steveschoger). | Transform API | https://github.com/svengau/tailwindcss-hero-patterns |
|                           |                                                              |               |                                                      |


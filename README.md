# Windi CSS Plugins

Collection of plugins for [Windi CSS](https://github.com/windicss/windicss).

> If you find some plugin that you used is not yet supported, you are welcome to **post an issue or pull request**, and we will support it soon. Anyone can upload a pr to this project and pass in their own plugin. The package naming should conform to `@windicss/plugin-xxx`.

## Transform API

For tailwind plugins, we generally use Transform API to support them. You can import them to your config like below:

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

## Sub Module

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

## Plugin List

| Plugin                    | Description                                                  | Support       |
| :------------------------ | :----------------------------------------------------------- | :------------ |
| [tailwind-scrollbar](https://github.com/adoxography/tailwind-scrollbar) | Adds styling utilities for scrollbars in Firefox and webkit-based browsers. | `require('@windicss/plugin-animations')` |
| [tailwindcss-hero-patterns](https://github.com/svengau/tailwindcss-hero-patterns) | A simple tailwind plugin to display [Hero Patterns](http://www.heropatterns.com/) | `transform('tailwindcss-hero-patterns')` |
| [tailwindcss-animate.css](https://github.com/bentzibentz/tailwindcss-animate.css) | [Animate CSS](https://github.com/animate-css/animate.css) plugin | `require('@windicss/plugin-animations')` |
| [tailwindcss-fluid](https://github.com/bradlc/tailwindcss-fluid) | Fluid utilities for Tailwind CSS | `transform('tailwindcss-fluid')` |
| [tailwindcss-truncate-multiline](https://github.com/jhta/tailwindcss-truncate-multiline) | Tailwind CSS plugin to generate truncate multiline utilities | `transform('tailwindcss-truncate-multiline')` |
| [tailwindcss-blend-mode](https://github.com/hacknug/tailwindcss-blend-mode) | Blend-mode utilities for Tailwind CSS. | `transform('tailwindcss-blend-mode')` |
| [tailwindcss-question-mark](https://github.com/GavinJoyce/tailwindcss-question-mark) | A plugin that provides a helpful ? dev time utility. | `require('@windicss/plugin-question-mark')` |
| [tailwind-heropatterns](https://github.com/AndreaMinato/tailwind-heropatterns) | Streamlined integration between tailwindcss and heropatterns.com | `require('@windicss/plugin-heropatterns')` |
| [tailwind-color-vars](https://github.com/n1kk/tailwind-color-vars) | Tailwind plugin to generate css vars '--color-name' for colors list. | `transform('tailwind-color-vars')` |
| [tailwindcss-triangle-after](https://github.com/chrisrowe/tailwindcss-triangle-after) | Tailwind plugin to generate css vars '--color-name' for colors list. | `transform('tailwindcss-triangle-after')` |
| [tailwindcss-interaction-variants](https://github.com/benface/tailwindcss-interaction-variants) | add some missing interaction state variants | `require('@windicss/plugin-interaction-variants')` |
| [tailwindcss-gradients](https://github.com/benface/tailwindcss-gradients) | generate gradient background utilities | `transform('tailwindcss-gradients')` |
| [tailwind-nord](https://github.com/crumb1e/tailwind-nord) | enables the use of the Nord color palette. | `transform('tailwind-nord')` |
| [tailwindcss-border-gradients](https://github.com/cossssmin/tailwindcss-border-gradients) | generate border image gradient utilities. | `transform('tailwindcss-border-gradients')` |
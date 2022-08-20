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
| [icons](https://github.com/windicss/plugins/tree/main/packages/icons) | Generate on-demands icon library for windicss. | `require('@windicss/plugin-icons')` |
| [animations](https://github.com/windicss/plugins/tree/main/packages/animations) | [Animate CSS](https://github.com/animate-css/animate.css) plugin | `require('@windicss/plugin-animations')` |
| [scrollbar](https://github.com/windicss/plugins/tree/main/packages/scrollbar) | Adds styling utilities for scrollbars in Firefox and webkit-based browsers. | `require('@windicss/plugin-scrollbar')` |
| [question-mark](https://github.com/windicss/plugins/tree/main/packages/question-mark) | A plugin that provides a helpful ? dev time utility. | `require('@windicss/plugin-question-mark')` |
| [heropatterns](https://github.com/windicss/plugins/tree/main/packages/heropatterns) | Streamlined integration between windicss and heropatterns.com | `require('@windicss/plugin-heropatterns')` |
| [interaction-variants](https://github.com/windicss/plugins/tree/main/packages/interaction-variants) | Add some missing interaction state variants | `require('@windicss/plugin-interaction-variants')` |
| [hero-patterns](https://github.com/svengau/tailwindcss-hero-patterns) | A simple plugin to display [Hero Patterns](http://www.heropatterns.com/) | `transform('tailwindcss-hero-patterns')` |
| [fluid](https://github.com/bradlc/tailwindcss-fluid) | Fluid utilities for Tailwind CSS | `transform('tailwindcss-fluid')` |
| [truncate-multiline](https://github.com/jhta/tailwindcss-truncate-multiline) | Generate truncate multiline utilities | `transform('tailwindcss-truncate-multiline')` |
| [blend-mode](https://github.com/hacknug/tailwindcss-blend-mode) | Blend-mode utilities for Tailwind CSS. | `transform('tailwindcss-blend-mode')` |
| [color-vars](https://github.com/n1kk/tailwind-color-vars) | Generate css vars '--color-name' for colors list. | `transform('tailwind-color-vars')` |
| [triangle-after](https://github.com/chrisrowe/tailwindcss-triangle-after) | Generate styles for CSS based triangles. | `transform('tailwindcss-triangle-after')` |
| [gradients](https://github.com/benface/tailwindcss-gradients) | Generate gradient background utilities | `transform('tailwindcss-gradients')` |
| [nord](https://github.com/crumb1e/tailwind-nord) | Enables the use of the Nord color palette. | `transform('tailwind-nord')` |
| [border-gradients](https://github.com/cossssmin/tailwindcss-border-gradients) | Generate border image gradient utilities. | `transform('tailwindcss-border-gradients')` |
| [elevation](https://github.com/jonaskay/tailwindcss-elevation) | Add Material Components elevation classes | `transform('tailwindcss-elevation')` |
| [bootstrap-grid](https://github.com/karolis-sh/tailwind-bootstrap-grid) | Generates Bootstrap's flexbox grid | `transform('tailwind-bootstrap-grid')` |

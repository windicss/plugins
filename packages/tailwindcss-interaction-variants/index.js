const plugin = require('windicss/plugin');

module.exports = plugin(function ({ addVariant, e }) {
  addVariant('group-focus-within', ({ parent }) => {
    return parent('.group:focus-within');
  });

  addVariant('group-focus-visible', ({ parent }) => {
    return parent('.group:focus-visible');
  });

  addVariant('group-active', ({ parent }) => {
    return parent('.group:active');
  });

  addVariant('group-visited', ({ parent }) => {
    return parent('.group:visited');
  });

  addVariant('group-disabled', ({ parent }) => {
    return parent('.group:disabled');
  });

  addVariant('hocus', ({ modifySelectors }) => {
    return modifySelectors(({ className }) => {
      return `.${className}:hover, .${className}:focus`;
    });
  })

  addVariant('group-hocus', ({ modifySelectors }) => {
    return modifySelectors(({ className }) => {
      return `.group:hover .${className}, .group:focus .${className}`;
    });
  })

  addVariant('can-hover', ({ atRule }) => {
    return atRule('@media (hover: hover)');
  });

  addVariant('no-hover', ({ atRule }) => {
    return atRule('@media (hover: none)');
  })
});
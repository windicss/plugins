module.exports = function({ addDynamic }) {
  addDynamic("?", ({ Utility, Style, Keyframes }) => {
    if (Utility.raw === '?') {
      return Style.generate(Utility.class, {
        '-webkit-animation': `question 0.5s ease-in-out alternate infinite`,
        'animation': `question 0.5s ease-in-out alternate infinite`
      }).concat(Keyframes.generate('question', {
        '0%': {
          'box-shadow': 'inset 4px 4px rgb(236, 15, 170), inset -4px -4px rgb(236, 15, 170)'
        },
        '100%': {
          'box-shadow': 'inset 8px 8px rgb(236, 15, 170), inset -8px -8px rgb(236, 15, 170)'
        }
      }));
    }
  })
};
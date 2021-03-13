import { Processor } from 'windicss/lib';
import { transform } from 'windicss/helpers';

describe('transform', () => {
  it('tailwindcss-hero-patterns', () => {
    const processor = new Processor({
      plugins: [
        transform("tailwindcss-hero-patterns"),
      ]
    });
    expect(processor.interpret('heropattern-jigsaw-red-100 heropattern-overlappingcircles-blue-200').styleSheet.build()).toMatchSnapshot("css");
  })

  it('tailwindcss-truncate-multiline', () => {
    const processor = new Processor({
      theme: {
        truncate: {
          lines: {
              3: '3',
              5: '5',
              8: '8',
          }
        },
        extend: undefined
      },
      patterns: ["polka-dots", "signal"],
      plugins: [
        transform('tailwindcss-truncate-multiline')(),
      ]
    });
    expect(processor.interpret('truncate-3-lines truncate-5-lines').styleSheet.build()).toMatchSnapshot('css');
  })

  it('tailwindcss-fluid', () => {
    const processor = new Processor({
      plugins: [
        transform('tailwindcss-fluid')({
          textSizes: {
            sm: {
              min: '14px',
              max: '20px',
              minvw: '320px',
              maxvw: '1400px'
            }
          }
        })
      ]
    });
    expect(processor.interpret('text-sm-fluid').styleSheet.build()).toMatchSnapshot('css');
  });
})


it("tailwindcss-blend-mode", () => {
  const processor = new Processor({
    plugins: [
      transform('tailwindcss-blend-mode')(), // no options to configure
    ]
  });
  expect(processor.interpret('blend-normal blend-screen bg-blend-difference isolation-auto').styleSheet.build()).toMatchSnapshot('css');
})

it('tailwind-nord', () => {
  const processor = new Processor({
    plugins: [
      transform('tailwind-nord'),
    ]
  });
  expect(processor.interpret('bg-nord0 text-nord6').styleSheet.build()).toMatchSnapshot('css');
})

it('tailwind-color-vars', () => {
  const processor = new Processor({
    plugins: [
      transform('tailwind-color-vars')({
        colors: {
          'primary': 'rgba(0, 80, 200, 0.7)',
          'black': 'black',
        },
        // default value, this will give passed values priority
        strategy: 'override',  
      })
    ]
  });
  expect(processor.preflight(undefined, false, false, true).build()).toMatchSnapshot('css');
})

it('tailwindcss-triangle-after', () => {
  const colors = {
    blue: '#1c1c1e',
    'blue-darker': '#1c1c1c',
  };
  const processor = new Processor({
    plugins: [
      transform('tailwindcss-triangle-after')({
        triangles: {
          select: {
            color: colors['blue'],
            direction: 'down',
            size: [10, 6],
          },
          next: {
            color: colors['blue-darker'],
            direction: 'right',
            right: '2rem',
            top: '3rem',
            size: 12
          }
        },
      }),
    ]
  })
  expect(processor.interpret('triangle-after-select triangle-after-next').styleSheet.build()).toMatchSnapshot('css');
})

it('tailwindcss-gradients', () => {
  const processor = new Processor({
    theme: {
      colors: {
        'red': '#f00',
        'blue': '#00f',
      },
      linearGradientColors: theme => theme('colors'),
      radialGradientColors: theme => theme('colors'),
      conicGradientColors: theme => theme('colors'),
    },
    plugins: [
      transform('tailwindcss-gradients'),
    ]
  });
  expect(processor.interpret('bg-gradient-tl-red bg-radial-br-red bg-conic-tr-red').styleSheet.build()).toMatchSnapshot('css');
});

it('tailwindcss-border-gradients', () => {
  const processor = new Processor({
    theme: {
      linearBorderGradients: {
        colors: {
          'red': '#f00',
        },
      },
    },
    plugins: [
      transform('tailwindcss-border-gradients')(),
    ],
  });
  expect(processor.interpret('border-gradient-t-red border-gradient-tl-red').styleSheet.build()).toMatchSnapshot('css');
})

it('tailwindcss-elevation', () => {
  const processor = new Processor({
    plugins: [
      transform('tailwindcss-elevation')([]),
    ]
  });
  expect(processor.interpret('elevation-0 elevation-2 elevation-21').styleSheet.build()).toMatchSnapshot('css');
})
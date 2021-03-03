import { Processor } from 'windicss/lib';
import { transform } from '../../utils/transformer';

describe('transform', () => {
  it('tailwind-scrollbar', () => {
    const processor = new Processor({
      plugins: [
        transform("tailwind-scrollbar"),
      ]
    });
    expect(processor.interpret('scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100').styleSheet.build()).toMatchSnapshot("css");
  });

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

  // it('tailwindcss-fluid', () => {
  //   const processor = new Processor({
  //     plugins: [
  //       transform('tailwindcss-fluid')({
  //         textSizes: {
  //           sm: {
  //             min: '14px',
  //             max: '20px',
  //             minvw: '320px',
  //             maxvw: '1400px'
  //           }
  //         }
  //       })
  //     ]
  //   });
  //   expect(processor.interpret('text-sm-fluid').styleSheet.build()).toMatchSnapshot('css');
  // });

  // it('tailwind-heropatterns', () => {
  //   const processor = new Processor({
  //     plugins: [
  //       transform("tailwind-heropatterns")({
  //         // as per tailwind docs you can pass variants
  //         variants: [],
        
  //         // the list of patterns you want to generate a class for
  //         // the names must be in kebab-case
  //         // an empty array will generate all 87 patterns
  //         patterns: ["polka-dots", "signal"],
        
  //         // The foreground colors of the pattern
  //         colors: {
  //           default: "#9C92AC",
  //           "blue-dark": "#000044" //also works with rgb(0,0,205)
  //         },
        
  //         // The foreground opacity
  //         opacity: {
  //           default: "0.4",
  //           "100": "1.0"
  //         }
  //       })
  //     ]
  //   });
  //   // console.log(processor._plugin.static)

  //   expect(processor.interpret('bg-hero-polka-dots-100 bg-hero-signal bg-hero-polka-dots-blue-dark-100').styleSheet.build()).toMatchSnapshot('css');
  // })
})


it("tailwindcss-blend-mode", () => {
  const processor = new Processor({
    plugins: [
      transform('tailwindcss-blend-mode')(), // no options to configure
    ]
  });
  expect(processor.interpret('blend-normal blend-screen bg-blend-difference isolation-auto').styleSheet.build()).toMatchSnapshot('css');
})
import { Processor } from 'windicss/lib';
import { transform } from '../../packages/transformer';

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
})

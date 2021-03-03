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
})

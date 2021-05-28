import { Processor } from 'windicss/lib';

describe('modules', () => {
  it('plugin-scrollbar', () => {
    const processor = new Processor({
      plugins: [
        require('../../packages/scrollbar'),
      ]
    });
    expect(processor.preflight(undefined, false, false, true).build()).toMatchSnapshot("preflight");
    expect(processor.interpret('scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 hover:scrollbar-track-gray-100').styleSheet.build()).toMatchSnapshot("css");
  });


  it('plugin-animations', () => {
    const processor = new Processor({
      plugins: [
        require('../../packages/animations')({
          settings: {
            animatedSpeed: 1000,
            heartBeatSpeed: 1000,
            hingeSpeed: 2000,
            bounceInSpeed: 750,
            bounceOutSpeed: 750,
            animationDelaySpeed: 1000
          },
        })
      ]
    });
    expect(processor.interpret('animate-fadeIn animate-ping animate-delay-2s animate-shakeY animate-animated').styleSheet.build()).toMatchSnapshot('css');
  });

  it('plugin-question-mark', () => {
    const processor = new Processor({
      plugins: [
        require('../../packages/question-mark'),
      ]
    });
    expect(processor.interpret('? bg-white').styleSheet.build()).toMatchSnapshot('css');
  });

  it('plugin-heropatterns', () => {
    const processor = new Processor({
      plugins: [
        require('../../packages/heropatterns')({
          // as per tailwind docs you can pass variants
          variants: [],
        
          // the list of patterns you want to generate a class for
          // the names must be in kebab-case
          // an empty array will generate all 87 patterns
          patterns: ["polka-dots", "signal"],
        
          // The foreground colors of the pattern
          colors: {
            default: "#9C92AC",
            "blue-dark": "#000044" //also works with rgb(0,0,205)
          },
        
          // The foreground opacity
          opacity: {
            default: "0.4",
            "100": "1.0"
          }
        })
      ]
    });
    expect(processor.interpret('bg-hero-polka-dots-100 bg-hero-signal bg-hero-polka-dots-blue-dark-100').styleSheet.build()).toMatchSnapshot('css');
  });

  it('plugin-interaction-variants', () => {
    const processor = new Processor({
      plugins: [
        require('../../packages/interaction-variants')
      ]
    });
    expect(processor.interpret('bg-black group-focus-within:bg-black group-focus-visible:bg-black group-active:bg-black group-visited:bg-black group-disabled:bg-black hocus:bg-black group-hocus:bg-black can-hover:bg-black no-hover:bg-black').styleSheet.build()).toMatchSnapshot('css');
  });

  it('plugin icons', () => {
    const processor = new Processor({
      plugins: [
        require('../../packages/icons')
      ]
    });
    expect(processor.interpret('icon-abstract icon-spinner-alt').styleSheet.build()).toMatchSnapshot('icons');
  });
})
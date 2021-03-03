import { Processor } from 'windicss/lib';

describe('modules', () => {
  it('tailwindcss-animate', () => {

    const processor = new Processor({
      plugins: [
        require('../../packages/tailwindcss-animate.css')({
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

  it('tailwindcss-question-mark', () => {
    const processor = new Processor({
      plugins: [
        require('../../packages/tailwindcss-question-mark'),
      ]
    });
    expect(processor.interpret('? bg-white').styleSheet.build()).toMatchSnapshot('css');
  });
})
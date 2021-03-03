<p align="left">
  <a href="https://github.com/bentzibentz/tailwindcss-animate.css/releases" target="_blank"><img alt="GitHub release" src="https://img.shields.io/github/v/release/bentzibentz/tailwindcss-animate.css?include_prereleases&style=flat-square"></a>
  <a href="https://npmjs.com/package/tailwindcss-animatecss" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/tailwindcss-animatecss?style=flat-square"></a>
  <a href="https://npmjs.com/package/tailwindcss-animatecss" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/tailwindcss-animatecss?style=flat-square"></a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/tailwindcss-animatecss?style=flat-square">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/bentzibentz/tailwindcss-animate.css?style=flat-square">
  <img alt="License" src=" https://img.shields.io/github/license/bentzibentz/tailwindcss-animate.css">
</p>

# Animate CSS - Tailwind CSS Plugin
Add [Animate CSS](https://github.com/animate-css/animate.css) as [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) plugin to your project.

## Installation

```bash
npm install --save-dev @windicss/animations
```

## Usage

Add Tailwind CSS to your project as described [here](https://tailwindcss.com/docs/installation).
Install tailwindcss plugin as described above and add it to your tailwind.config.js file. 

```js
plugins: [
  // Other plugins
  require('@windicss/animations')({
        settings: {
          animatedSpeed: 1000,
          heartBeatSpeed: 1000,
          hingeSpeed: 2000,
          bounceInSpeed: 750,
          bounceOutSpeed: 750,
          animationDelaySpeed: 1000
        },
      }),
]
```

### Available Animate CSS classes
* .animate-animated
* .animate-infinite
* .animate-delay
* .animate-delay-1s
* .animate-delay-2s
* .animate-delay-3s
* .animate-delay-4s
* .animate-delay-5s
* .animate-fast
* .animate-faster
* .animate-slow
* .animate-slower
* .animate-bounce
* .animate-flash
* .animate-pulse
* .animate-rubberBand
* .animate-shakeY
* .animate-shakeX
* .animate-headShake
* .animate-swing
* .animate-tada
* .animate-wobble
* .animate-jello
* .animate-heartBeat
* .animate-hinge
* .animate-jackInTheBox
* .animate-lightSpeedIn
* .animate-lightSpeedOut
* .animate-flip
* .animate-flipInX
* .animate-flipInY
* .animate-flipOutX
* .animate-flipOutY
* .animate-rotateIn
* .animate-rotateInDownLeft
* .animate-rotateInDownRight
* .animate-rotateInUpLeft
* .animate-rotateInUpRight
* .animate-rotateOut
* .animate-rotateOutDownLeft
* .animate-rotateOutDownRight
* .animate-rotateOutUpLeft
* .animate-rotateOutUpRight
* .animate-rollIn
* .animate-rollOut
* .animate-zoomIn
* .animate-zoomInUp
* .animate-zoomInDown
* .animate-zoomInLeft
* .animate-zoomInRight
* .animate-bounceIn
* .animate-bounceInDown
* .animate-bounceInUp
* .animate-bounceInLeft
* .animate-bounceInRight
* .animate-bounceOut
* .animate-bounceOutDown
* .animate-bounceOutUp
* .animate-bounceOutLeft
* .animate-bounceOutRight
* .animate-slideInDown
* .animate-slideInLeft
* .animate-slideInRight
* .animate-slideInUp
* .animate-slideOutDown
* .animate-slideOutLeft
* .animate-slideOutRight
* .animate-slideOutUp
* .animate-fadeIn
* .animate-fadeInDown
* .animate-fadeInDownBig
* .animate-fadeInLeft
* .animate-fadeInLeftBig
* .animate-fadeInRight
* .animate-fadeInRightBig
* .animate-fadeInUp
* .animate-fadeInUpBig
* .animate-fadeInTopLeft
* .animate-fadeInTopRight
* .animate-fadeInBottomLeft
* .animate-fadeInBottomRight
* .animate-fadeOut
* .animate-fadeOutDown
* .animate-fadeOutDownBig
* .animate-fadeOutLeft
* .animate-fadeOutLeftBig
* .animate-fadeOutRight
* .animate-fadeOutRightBig
* .animate-fadeOutUp
* .animate-fadeOutUpBig
* .animate-fadeOutTopLeft
* .animate-fadeOutTopRight
* .animate-fadeOutBottomLeft
* .animate-fadeOutBottomRight
* .animate-zoomOutDown
* .animate-zoomOutLeft
* .animate-zoomOutRight
* .animate-zoomOut
* .animate-zoomOutUp
* .animate-lightSpeedInRight
* .animate-lightSpeedInLeft
* .animate-lightSpeedOutRight
* .animate-lightSpeedOutLeft
* .animate-backInDown
* .animate-backInUp
* .animate-backInLeft
* .animate-backInRight
* .animate-backOutDown
* .animate-backOutUp
* .animate-backOutLeft
* .animate-backOutRight

## Credits

This package is based on awesome [Animate.css](https://github.com/animate-css/animate.css).

## More Tailwind CSS Plugins
[tailwindcss-absolute-center](https://github.com/bentzibentz/tailwindcss-absolute-center)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

const plugin = require("windicss/plugin");
const keyframes = require("./keyframes/keyframes");
const keyframesLightSpeed = require("./keyframes/lightspeed");
const keyframesFlip = require("./keyframes/flip");
const keyframesRotateIn = require("./keyframes/rotateIn");
const keyframesRotateOut = require("./keyframes/rotateOut");
const keyframesRoll = require("./keyframes/roll");
const keyframesZoomIn = require("./keyframes/zoomIn");
const keyframesZoomOut = require("./keyframes/zoomOut");
const keyframesBounceIn = require("./keyframes/bounceIn");
const keyframesBounceOut = require("./keyframes/bounceOut");
const keyframesSlideIn = require("./keyframes/slideIn");
const keyframesSlideOut = require("./keyframes/slideOut");
const keyframesFadeIn = require("./keyframes/fadeIn");
const keyframesFadeOut = require("./keyframes/fadeOut");
const keyframesBackIn = require("./keyframes/backIn");
const keyframesBackOut = require("./keyframes/backOut");

module.exports = plugin.withOptions(function ({
  classes = [],
  settings = {},
  variants = ["responsive"],
}) {
  return function ({ addDynamic }) {
    // set settings obj to not break
    if (!settings) {
      settings = {};
    }

    // set fallback if speed not defined
    const animatedSpeed = settings.animatedSpeed
      ? settings.animatedSpeed
      : 1000;
    const heartBeatSpeed = settings.heartBeatSpeed
      ? settings.heartBeatSpeed
      : 1000;
    const hingeSpeed = settings.hingeSpeed ? settings.hingeSpeed : 2000;
    const bounceInSpeed = settings.bounceInSpeed ? settings.bounceInSpeed : 750;
    const bounceOutSpeed = settings.bounceOutSpeed
      ? settings.bounceOutSpeed
      : 750;
    const animationDelaySpeed = settings.animationDelaySpeed
      ? settings.animationDelaySpeed
      : 500;
    const opacity = settings.opacity ? settings.opacity : 1;

    const fallbackUtilities = {
      animated: {
        animationDuration: `${animatedSpeed}ms`,
        animationFillMode: "both",
      },
      infinite: {
        animationIterationCount: "infinite",
      },
      "repeat-1": {
        animationRepeat: 1,
      },
      "repeat-2": {
        animationRepeat: 2,
      },
      "repeat-3": {
        animationRepeat: 3,
      },
      delay: {
        animationDelay: `${animationDelaySpeed}ms`,
      },
      "delay-1s": {
        animationDelay: `1000ms`,
      },
      "delay-2s": {
        animationDelay: `2000ms`,
      },
      "delay-3s": {
        animationDelay: `3000ms`,
      },
      "delay-4s": {
        animationDelay: `4000ms`,
      },
      "delay-5s": {
        animationDelay: `5000ms`,
      },
      fast: {
        animationDuration: `800ms`,
      },
      faster: {
        animationDuration: `500ms`,
      },
      slow: {
        animationDuration: `2000ms`,
      },
      slower: {
        animationDuration: `3000ms`,
      },
      bounce: {
        animationName: "bounce",
        transformOrigin: "center bottom",
      },
      flash: {
        animationName: "flash",
      },
      pulse: {
        animationName: "pulse",
      },
      rubberBand: {
        animationName: "rubberBand",
      },
      shakeX: {
        animationName: "shakeX",
      },
      shakeY: {
        animationName: "shakeY",
      },
      headShake: {
        animationTimingFunction: "ease-in-out",
        animationName: "headShake",
      },
      swing: {
        transformOrigin: "top center",
        animationName: "swing",
      },
      tada: {
        animationName: "tada",
      },
      wobble: {
        animationName: "wobble",
      },
      jello: {
        animationName: "jello",
      },
      heartBeat: {
        animationName: "heartBeat",
        animationDuration: `${heartBeatSpeed}ms`,
        animationTimingFunction: "ease-in-out",
      },
      hinge: {
        animationName: "hinge",
        animationDuration: `${hingeSpeed}ms`,
      },
      jackInTheBox: {
        animationName: "jackInTheBox",
      },
      lightSpeedInLeft: {
        animationName: "lightSpeedInLeft",
      },
      lightSpeedInRight: {
        animationName: "lightSpeedInRight",
      },
      lightSpeedOutLeft: {
        animationName: "lightSpeedOutLeft",
      },
      lightSpeedOutRight: {
        animationName: "lightSpeedOutRight",
      },
      flip: {
        animationName: "flip",
        backfaceVisibility: "visible",
      },
      flipInX: {
        animationName: "flipInX",
        backfaceVisibility: "visible",
      },
      flipInY: {
        animationName: "flipInY",
        backfaceVisibility: "visible",
      },
      flipOutX: {
        animationName: "flipOutX",
        backfaceVisibility: "visible",
      },
      flipOutY: {
        animationName: "flipOutY",
        backfaceVisibility: "visible",
      },
      rotateIn: {
        animationName: "rotateIn",
      },
      rotateInDownLeft: {
        animationName: "rotateInDownLeft",
      },
      rotateInDownRight: {
        animationName: "rotateInDownRight",
      },
      rotateInUpLeft: {
        animationName: "rotateInUpLeft",
      },
      rotateInUpRight: {
        animationName: "rotateInUpRight",
      },
      rotateOut: {
        animationName: "rotateOut",
      },
      rotateOutDownLeft: {
        animationName: "rotateOutDownLeft",
      },
      rotateOutDownRight: {
        animationName: "rotateOutDownRight",
      },
      rotateOutUpLeft: {
        animationName: "rotateOutUpLeft",
      },
      rotateOutUpRight: {
        animationName: "rotateOutUpRight",
      },
      rollIn: {
        animationName: "rollIn",
      },
      rollOut: {
        animationName: "rollOut",
      },
      zoomIn: {
        animationName: "zoomIn",
      },
      zoomInDown: {
        animationName: "zoomInDown",
      },
      zoomInLeft: {
        animationName: "zoomInLeft",
      },
      zoomInRight: {
        animationName: "zoomInRight",
      },
      zoomInUp: {
        animationName: "zoomInUp",
      },
      bounceIn: {
        animationName: "bounceIn",
        animationDuration: `${bounceInSpeed}ms`,
      },
      bounceInDown: {
        animationName: "bounceInDown",
      },
      bounceInLeft: {
        animationName: "bounceInLeft",
      },
      bounceInRight: {
        animationName: "bounceInRight",
      },
      bounceInUp: {
        animationName: "bounceInUp",
      },
      bounceOut: {
        animationName: "bounceOut",
        animationDuration: `${bounceOutSpeed}ms`,
      },
      bounceOutDown: {
        animationName: "bounceOutDown",
      },
      bounceOutLeft: {
        animationName: "bounceOutLeft",
      },
      bounceOutRight: {
        animationName: "bounceOutRight",
      },
      bounceOutUp: {
        animationName: "bounceOutUp",
      },
      zoomOut: {
        animationName: "zoomOut",
      },
      zoomOutDown: {
        animationName: "zoomOutDown",
      },
      zoomOutLeft: {
        animationName: "zoomOutLeft",
      },
      zoomOutRight: {
        animationName: "zoomOutRight",
      },
      zoomOutUp: {
        animationName: "zoomOutUp",
      },
      slideInDown: {
        animationName: "slideInDown",
      },
      slideInLeft: {
        animationName: "slideInLeft",
      },
      slideInRight: {
        animationName: "slideInRight",
      },
      slideInUp: {
        animationName: "slideInUp",
      },
      slideOutDown: {
        animationName: "slideOutDown",
      },
      slideOutLeft: {
        animationName: "slideOutLeft",
      },
      slideOutRight: {
        animationName: "slideOutRight",
      },
      slideOutUp: {
        animationName: "slideOutUp",
      },
      fadeIn: {
        animationName: "fadeIn",
      },
      fadeInDown: {
        animationName: "fadeInDown",
      },
      fadeInDownBig: {
        animationName: "fadeInDownBig",
      },
      fadeInLeft: {
        animationName: "fadeInLeft",
      },
      fadeInLeftBig: {
        animationName: "fadeInLeftBig",
      },
      fadeInRight: {
        animationName: "fadeInRight",
      },
      fadeInRightBig: {
        animationName: "fadeInRightBig",
      },
      fadeInUp: {
        animationName: "fadeInUp",
      },
      fadeInUpBig: {
        animationName: "fadeInUpBig",
      },
      fadeInTopLeft: {
        animationName: "fadeInTopLeft",
      },
      fadeInTopRight: {
        animationName: "fadeInTopRight",
      },
      fadeInBottomLeft: {
        animationName: "fadeInBottomLeft",
      },
      fadeInBottomRight: {
        animationName: "fadeInBottomRight",
      },
      fadeOut: {
        animationName: "fadeOut",
      },
      fadeOutDown: {
        animationName: "fadeOutDown",
      },
      fadeOutDownBig: {
        animationName: "fadeOutDownBig",
      },
      fadeOutLeft: {
        animationName: "fadeOutLeft",
      },
      fadeOutLeftBig: {
        animationName: "fadeOutLeftBig",
      },
      fadeOutRight: {
        animationName: "fadeOutRight",
      },
      fadeOutRightBig: {
        animationName: "fadeOutRightBig",
      },
      fadeOutUp: {
        animationName: "fadeOutUp",
      },
      fadeOutUpBig: {
        animationName: "fadeOutUpBig",
      },
      backInUp: {
        animationName: "backInUp",
      },
      backInDown: {
        animationName: "backInDown",
      },
      backInLeft: {
        animationName: "backInLeft",
      },
      backInRight: {
        animationName: "backInRight",
      },
      backOutUp: {
        animationName: "backOutUp",
      },
      backOutDown: {
        animationName: "backOutDown",
      },
      backOutLeft: {
        animationName: "backOutLeft",
      },
      backOutRight: {
        animationName: "backOutRight",
      },
    };

    const fallbackKeyframes = {
      bounce: keyframes.keyframeBounce,
      flash: keyframes.keyframeFlash,
      pulse: keyframes.keyframePulse,
      rubberBand: keyframes.keyframeRubberBand,
      shakeX: keyframes.keyframeShakeX,
      shakeY: keyframes.keyframeShakeY,
      headShake: keyframes.keyframeHeadShake,
      swing: keyframes.keyframeSwing,
      tada: keyframes.keyframeTada,
      wobble: keyframes.keyframeWobble,
      jello: keyframes.keyframeJello,
      heartBeat: keyframes.keyframeHeartBeat,
      hinge: keyframes.keyframeHinge,
      jackInTheBox: keyframes.keyframeJackInTheBox,
      lightSpeedInLeft: keyframesLightSpeed.keyframeLightSpeedInLeft,
      lightSpeedInRight: keyframesLightSpeed.keyframeLightSpeedInRight,
      lightSpeedOutLeft: keyframesLightSpeed.keyframeLightSpeedOutLeft,
      lightSpeedOutRight: keyframesLightSpeed.keyframeLightSpeedOutRight,
      flip: keyframesFlip.keyframeFlip,
      flipInX: keyframesFlip.keyframeFlipInX,
      flipInY: keyframesFlip.keyframeFlipInY,
      flipOutX: keyframesFlip.keyframeFlipOutX,
      flipOutY: keyframesFlip.keyframeFlipOutY,
      rotateIn: keyframesRotateIn.keyframeRotateIn,
      rotateInDownLeft: keyframesRotateIn.keyframeRotateInDownLeft,
      rotateInDownRight: keyframesRotateIn.keyframeRotateInDownRight,
      rotateInUpLeft: keyframesRotateIn.keyframeRotateInUpLeft,
      rotateInUpRight: keyframesRotateIn.keyframeRotateInUpRight,
      rotateOut: keyframesRotateOut.keyframeRotateOut,
      rotateOutDownLeft: keyframesRotateOut.keyframeRotateOutDownLeft,
      rotateOutDownRight: keyframesRotateOut.keyframeRotateOutDownRight,
      rotateOutUpLeft: keyframesRotateOut.keyframeRotateOutUpLeft,
      rotateOutUpRight: keyframesRotateOut.keyframeRotateOutUpRight,
      rollIn: keyframesRoll.keyframeRollIn,
      rollOut: keyframesRoll.keyframeRollOut,
      zoomIn: keyframesZoomIn.keyframeZoomIn,
      zoomInDown: keyframesZoomIn.keyframeZoomInDown,
      zoomInLeft: keyframesZoomIn.keyframeZoomInLeft,
      zoomInRight: keyframesZoomIn.keyframeZoomInRight,
      zoomInUp: keyframesZoomIn.keyframeZoomInUp,
      bounceIn: keyframesBounceIn.keyframeBounceIn,
      bounceInDown: keyframesBounceIn.keyframeBounceInDown,
      bounceInLeft: keyframesBounceIn.keyframeBounceInLeft,
      bounceInRight: keyframesBounceIn.keyframeBounceInRight,
      bounceInUp: keyframesBounceIn.keyframeBounceInUp,
      bounceOut: keyframesBounceOut.keyframeBounceOut,
      bounceOutDown: keyframesBounceOut.keyframeBounceOutDown,
      bounceOutLeft: keyframesBounceOut.keyframeBounceOutLeft,
      bounceOutRight: keyframesBounceOut.keyframeBounceOutRight,
      bounceOutUp: keyframesBounceOut.keyframeBounceOutUp,
      zoomOut: keyframesZoomOut.keyframeZoomOut,
      zoomOutDown: keyframesZoomOut.keyframeZoomOutDown,
      zoomOutLeft: keyframesZoomOut.keyframeZoomOutLeft,
      zoomOutRight: keyframesZoomOut.keyframeZoomOutRight,
      zoomOutUp: keyframesZoomOut.keyframeZoomOutUp,
      slideInDown: keyframesSlideIn.keyframeSlideInDown,
      slideInLeft: keyframesSlideIn.keyframeSlideInLeft,
      slideInRight: keyframesSlideIn.keyframeSlideInRight,
      slideInUp: keyframesSlideIn.keyframeSlideInUp,
      slideOutDown: keyframesSlideOut.keyframeSlideOutDown,
      slideOutLeft: keyframesSlideOut.keyframeSlideOutLeft,
      slideOutRight: keyframesSlideOut.keyframeSlideOutRight,
      slideOutUp: keyframesSlideOut.keyframeSlideOutUp,
      fadeIn: keyframesFadeIn.keyframeFadeIn,
      fadeInDown: keyframesFadeIn.keyframeFadeInDown,
      fadeInDownBig: keyframesFadeIn.keyframeFadeInDownBig,
      fadeInLeft: keyframesFadeIn.keyframeFadeInLeft,
      fadeInLeftBig: keyframesFadeIn.keyframeFadeInLeftBig,
      fadeInRight: keyframesFadeIn.keyframeFadeInRight,
      fadeInRightBig: keyframesFadeIn.keyframeFadeInRightBig,
      fadeInTopLeft: keyframesFadeIn.keyframeFadeInTopLeft,
      fadeInTopRight: keyframesFadeIn.keyframeFadeInTopRight,
      fadeInBottomLeft: keyframesFadeIn.keyframeFadeInBottomLeft,
      fadeInBottomRight: keyframesFadeIn.keyframeFadeInBottomRight,
      fadeInUp: keyframesFadeIn.keyframeFadeInUp,
      fadeInUpBig: keyframesFadeIn.keyframeFadeInUpBig,
      fadeOut: keyframesFadeOut.keyframeFadeOut,
      fadeOutDown: keyframesFadeOut.keyframeFadeOutDown,
      fadeOutDownBig: keyframesFadeOut.keyframeFadeOutDownBig,
      fadeOutLeft: keyframesFadeOut.keyframeFadeOutLeft,
      fadeOutLeftBig: keyframesFadeOut.keyframeFadeOutLeftBig,
      fadeOutRight: keyframesFadeOut.keyframeFadeOutRight,
      fadeOutRightBig: keyframesFadeOut.keyframeFadeOutRightBig,
      fadeOutUp: keyframesFadeOut.keyframeFadeOutUp,
      fadeOutUpBig: keyframesFadeOut.keyframeFadeOutUpBig,
      fadeOutTopLeft: keyframesFadeOut.keyframeFadeOutTopLeft,
      fadeOutTopRight: keyframesFadeOut.keyframeFadeOutTopRight,
      fadeOutBottomLeft: keyframesFadeOut.keyframeFadeOutBottomLeft,
      fadeOutBottomRight: keyframesFadeOut.keyframeFadeOutBottomRight,
      backInDown: keyframesBackIn.keyframeBackInDown,
      backInUp: keyframesBackIn.keyframeBackInUp,
      backInLeft: keyframesBackIn.keyframeBackInLeft,
      backInRight: keyframesBackIn.keyframeBackInRight,
      backOutDown: keyframesBackOut.keyframeBackOutDown,
      backOutUp: keyframesBackOut.keyframeBackOutUp,
      backOutLeft: keyframesBackOut.keyframeBackOutLeft,
      backOutRight: keyframesBackOut.keyframeBackOutRight,
    };

    addDynamic("animate", ({ Utility, Style, Keyframes }) => {
      if (Object.keys(fallbackUtilities).includes(Utility.body)) {
        const value = fallbackUtilities[Utility.body];
        let output = Style.generate(Utility.class, value);
        if (value.animationName) output = Keyframes.generate(value.animationName, fallbackKeyframes[value.animationName]).concat(output);
        return output;
      };
    }, {
      layer: "utilities",
    });
  };
});

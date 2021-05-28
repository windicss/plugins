import icons from './icons.json';
import plugin from 'windicss/plugin';
import { CSSParser } from 'windicss/utils/parser';

export default plugin(({ addDynamic }) => {
  addDynamic('icon', ({ Utility }) => {
    if (Utility.body in icons) {
      return new CSSParser((icons as {[key:string]: string})[Utility.body]).parse().children;
    }
  })
});

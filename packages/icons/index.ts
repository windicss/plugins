import icons from './icons.json';
import plugin from 'windicss/plugin';
import { CSSParser } from 'windicss/utils/parser';

const sizes: { [key:string]: string } = {
  'sm': '1',
  'md': '1.5',
  'lg': '2',
  'xl': '2.5'
}

export default plugin(({ addDynamic }) => {
  addDynamic('icon', ({ Utility, Property }) => {
    const body = Utility.body;
    if (body in sizes) return Property('--tw-icon', sizes[body])
    if (body in icons) {
      return new CSSParser((icons as {[key:string]: string})[body]).parse().children;
    }
  });
});

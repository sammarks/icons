declare module '*.svg' {
  import { SVGFactory } from 'react';

  const component: SVGFactory | string;

  export default component;
}

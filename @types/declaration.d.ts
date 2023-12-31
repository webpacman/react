declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.webp';

declare module '*.svg' {
  import type React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

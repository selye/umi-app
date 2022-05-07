declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '@umijs/plugin-antd-mobile';
declare module 'react-h5-calendar';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

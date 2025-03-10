import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
    *{margin:0;padding:0;font:inherit;color:inherit;}
    *, :after, :before {box-sizing:border-box;}
    :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
    html, body {height:100%; font-family: 'Noto Sans KR', sans-serif;}
    img, picture, video, canvas, svg {display: block;max-width:100%;}
    button {background:none;border:0;cursor:pointer;}
    a {text-decoration:none}
    table {border-collapse:collapse;border-spacing:0}
    ul {list-style:none}
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
`;

export default GlobalStyle;

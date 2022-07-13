export const url = chrome.runtime.getURL('index.html');
console.log(url);
const width = 435;
const height = window.innerHeight;

const style = document.createElement('style');
style.innerHTML = `
  body {
    max-width: calc(100vw - 435px);
  }
  #tools-iframe {
    position: absolute;
    top: 0px;
    right: 0px;
    background: #ffffff;
    border-right: 0px;
    border-bottom: 0px;
    border-top: 0px;
    border-left: 1px rgb(88, 194, 241) solid !important;
    z-index: 2000;
  }
  .toast-top-right {
    left: 10px !important;
  }
`;
document.head.appendChild(style);

const iframe = `<iframe src="${url}" id="tools-iframe" style="height: 100vh; width: ${width}px"></iframe>`;
document.querySelector('body')?.insertAdjacentHTML('beforeend', iframe);

const t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let n=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStop.disabled=!0,t.btnStart.disabled=!1,t.btnStart.addEventListener("click",(function(){t.btnStop.disabled=!1,t.btnStart.disabled=!0,n=setInterval((()=>{t.body.style.backgroundColor=o(),console.log(`body color is ${o()}`)}),1200)})),t.btnStop.addEventListener("click",(function(){t.btnStop.disabled=!0,t.btnStart.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.b12d5521.js.map

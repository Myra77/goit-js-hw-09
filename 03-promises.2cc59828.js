!function(){document.querySelector(".form");var e=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),n=document.querySelector('[name="amount"]');function t(e,o){var n=Math.random()>.3;return new Promise((function(t,c){setTimeout((function(){n?t({position:e,delay:o}):c({position:e,delay:o})}),o)}))}document.querySelector("button").addEventListener("click",(function(c){c.preventDefault();for(var u=Number(n.value),r=Number(e.value),a=Number(o.value),i=1;i<=u;i+=1)t(i,r+a*(i-1)).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.2cc59828.js.map
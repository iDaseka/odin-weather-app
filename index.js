(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{i:()=>m});var e=document.querySelector("#location"),n=document.querySelector("#temp"),o=document.querySelector("#text"),r=document.querySelector("#icon"),c=document.querySelector("#precipitation"),u=document.querySelector("#humidity");function i(){fetch("https://api.weatherapi.com/v1/current.json?key=f41710012dd54e1ab7a191545242803&q=".concat(m),{mode:"cors"}).then((function(t){return t.json()})).then((function(t){return i=t,e.textContent=i.location.name+", "+i.location.country,n.textContent=i.current.temp_c+"°C",o.textContent=i.current.condition.text,r.src="https:"+i.current.condition.icon,c.textContent=i.current.precip_mm+"mm",void(u.textContent=i.current.humidity+"%");var i}))}var a=document.querySelector("#place"),d=document.querySelector("#submit"),m="Argentina";i(),d.addEventListener("click",(function(){event.preventDefault(),m=a.value,i()}))})();
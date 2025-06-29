import{S as m,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const f="51088577-7b521529318281431558696f8",a=document.getElementById("form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader");let p=new m(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("submit",i=>{i.preventDefault(),c.innerHTML="";const o=i.target.elements.search.value,s=`https://pixabay.com/api/?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;if(o===""){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}u.style.display="block",fetch(s).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{if(u.style.display="none",t.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else{console.log(t.hits);const r=t.hits.map(e=>`<li class="gallery-item">
                <a href="${e.largeImageURL}">
                  <img src="${e.webformatURL}" width='360' height='200' alt="${e.tags}">
                </a>
                
                <ul>
                    <li><b>Likes</b> ${e.likes}</li>
                    <li><b>Views</b> ${e.views}</li>
                    <li><b>Comments</b> ${e.comments}</li>
                    <li><b>Downloads</b> ${e.downloads}</li>
                </ul>
                
                
            </li>`).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}}).catch(t=>{console.error("There has been a problem with your fetch operation:",t),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}),a.reset()});
//# sourceMappingURL=index.js.map

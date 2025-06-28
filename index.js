import{i as l}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const u="51088577-7b521529318281431558696f8",a=document.getElementById("form"),c=document.querySelector(".gallery");a.addEventListener("submit",i=>{i.preventDefault(),c.innerHTML="";const o=i.target.elements.search.value,s=`https://pixabay.com/api/?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(s).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0||o===""){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else{console.log(r.hits);const t=r.hits.map(e=>`<li class="gallery-item">
                <img src="${e.webformatURL}" width='360' height='200' alt="${e.tags}">
                <ul>
                    <li><b>Likes</b> ${e.likes}</li>
                    <li><b>Views</b> ${e.views}</li>
                    <li><b>Comments</b> ${e.comments}</li>
                    <li><b>Downloads</b> ${e.downloads}</li>
                </ul>
                
                
            </li>`).join("");c.insertAdjacentHTML("beforeend",t)}}).catch(r=>{console.error("There has been a problem with your fetch operation:",r),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}),a.reset()});
//# sourceMappingURL=index.js.map

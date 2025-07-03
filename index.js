import{S as f,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let m=new f(".gallery a",{captionsData:"alt",captionDelay:250});const d=s=>{const o=s.map(e=>`<li class="gallery-item">
                <a href="${e.largeImageURL}">
                  <img src="${e.webformatURL}" width='360' height='200' alt="${e.tags}">
                </a>
                
                <ul>
                    <li><b>Likes</b> ${e.likes}</li>
                    <li><b>Views</b> ${e.views}</li>
                    <li><b>Comments</b> ${e.comments}</li>
                    <li><b>Downloads</b> ${e.downloads}</li>
                </ul>
            </li>`).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()},g=()=>{u.style.display="block"},p=()=>{u.style.display="none"},h=()=>{c.innerHTML=""},y="51088577-7b521529318281431558696f8",b=s=>{const o=`https://pixabay.com/api/?key=${y}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})},l=document.querySelector(".form");document.querySelector(".loader");l.addEventListener("submit",s=>{s.preventDefault(),h();const o=s.target.elements.search.value;if(o===""){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}g(),b(o).then(e=>{if(e.hits.length===0){n.warning({title:"No results",message:"No images found for your search query.",position:"topRight"});return}d(e.hits)}).catch(e=>{n.error({title:"Error",message:"There was an error fetching the images. Please try again later.",position:"topRight"}),console.error("Error fetching images:",e)}).finally(()=>{p()}),l.reset()});
//# sourceMappingURL=index.js.map

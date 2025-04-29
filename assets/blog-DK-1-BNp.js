import"./essencial-DjFnyu8i.js";document.addEventListener("DOMContentLoaded",()=>{fetch("../json/posts.json").then(e=>e.json()).then(e=>{let r=document.getElementById("blog-container");r.innerHTML="",e.forEach(t=>{let n=`
               <article class="primary-container">
                    <div class="post">
                        <img class="responsive extra" src="${t.imagem}" alt="${t.titulo}">
                        <h2><a href="post.html?slug=${t.slug}">${t.titulo}</a></h2>
                        
                        <p>${t.resumo}</p>
                    </div>
                    </article>
                `;r.innerHTML+=n})}).catch(e=>console.error("Erro ao carregar os posts:",e))});

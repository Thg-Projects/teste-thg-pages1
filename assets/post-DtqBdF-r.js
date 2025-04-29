import"./essencial-DjFnyu8i.js";document.addEventListener("DOMContentLoaded",()=>{const o=new URLSearchParams(window.location.search).get("slug");fetch("../json/posts.json").then(e=>e.json()).then(e=>{let t=e.find(n=>n.slug===o);t?document.getElementById("post-container").innerHTML=`
                    <h1>${t.titulo}</h1>
                    <p class="post-date">${t.data}</p> <!-- Adicionada a classe post-date -->
                    <img class="responsive extra" src="${t.imagem}" alt="${t.titulo}">
                    <p>${t.conteudo}</p>
                `:document.getElementById("post-container").innerHTML="<p>Post não encontrado.</p>"}).catch(e=>console.error("Erro ao carregar o post:",e))});

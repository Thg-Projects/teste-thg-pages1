import{m as t,o as s,U as o}from"./firebaseFuncoes-B1sqI8Vj.js";import{l}from"./essencial-DjFnyu8i.js";t();const r=`
<header class="max responsive laranja">
    <nav>
        <button data-ui="#painel" class="circle transparent">
            <i>menu</i>
        </button>
        <h5 class="max responsive">
        
            <img src="/assets/img/logo.png" alt="Logo">
        </h5>
        <a href="../paginas/perfil.html">
            <button class="circle black">
                <i>account_circle</i>
                <div class="tooltip bottom">Perfil</div>
            </button>
        </a>
        <a href="../paginas/trainer.html">
            <button class="circle black">
                <i>dashboard</i>
                <div class="tooltip bottom">Ficha de Treino</div>
            </button>
        </a>
        <a href="../paginas/blog.html">
            <button class="circle black">
                <i>newspaper</i>
                <div class="tooltip bottom">Blog</div>
            </button>
        </a>
        <a href="../paginas/tabelaTreino.html">
            <button class="circle black">
                <i>fitness_center</i>
                <div class="tooltip bottom">ficha</div>
            </button>
        </a>
    </nav>
</header>
`,e=document.getElementById("headerDINAMICO");e&&(e.innerHTML=r);const c=`
<dialog id="painel" class="left">
    <nav class="drawer min black">
        <header>
            <nav style="padding: 1rem;">
                <img class="circle extra" src="..//img/imagem.jpg">
                <h6>Estética e Saúde Academia</h6>
            </nav>
        </header>
        <nav class="vertical center-align middle-align">
            <h4 class="set_nome">nome</h4>
        </nav>

        <a href="../paginas/perfil.html">
            <i>account_circle</i>
            <span class="max">Perfil</span>
        </a>

        <a href="../paginas/login.html">
            <i>account_circle</i>
            <span class="max">Login/Cadastro</span>
        </a>
        <label>App</label>
        <a data-ui="#tab1">
            <i>conditions</i>
            <span>Calculadora de IMC</span>
        </a>
        <a data-ui="#tab2">
            <i>water_drop</i>
            <span> Contador de água</span>
        </a>
        <a data-ui="#tab3">
            <i>monitor_heart</i>
            <span> Calculadora de Gasto Calórico </span>
        </a>
        <a data-ui="#tab5">
            <i>water_loss</i>
            <span>Lembre-se de beber água</span>
        </a>
        <hr>
        <label>Usuario</label>

        <a href="../paginas/trainer.html">
            <i>fitness_center</i>
            <span class="max">Abrir Ficha de Treino</span>
        </a>

        <a href="../paginas/tabelaTreino.html">
            <i>fitness_center</i>
            <span class="max">Abrir Tabela de Treino</span>
        </a>
    </nav>
    </nav>
    <nav class="right-align">

    </dialog>
`,i=document.getElementById("painel-dinamico");i&&(i.innerHTML+=c);var d=document.querySelector(".set_nome");console.log("set_nome",d);s(`/usuarios/${o}/perfil`).then(a=>{var n=document.querySelector(".set_nome");console.log("dados",a),n.innerHTML=a.nome});l.script("init modulos carregados");

// ##### SCRIPT PARA O SCROLL
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// ##### SCRIPT POPUP
type = "text/javascript" >
    function newPopup() {
        varWindow = window.open('./ava/cadastro.php', 'pagina', "width=1024, height=768,scrollbars=no");
    }

// ##### SCRIPT PARA INTERACAO DO USUARIO
var width = window.innerWidth;

function abrirMenu(){
    let btnMenu = document.querySelector('#btn-menu');
    let menu = document.querySelector('.menu');
    menu.style.right = "0";
    menu.style.transition = "1s";
    btnMenu.style.display = "none";
    isOpen = true;
}

function fecharMenu(){
    let btnMenu = document.querySelector('#btn-menu');
    let menu = document.querySelector('.menu');
    
    menu.style.right = "-700px";
    menu.style.transition = "1s";
    btnMenu.style.display = "block";
}

function excluirElemento(props){
    let excluir = document.querySelector(props);
    excluir.style.display = "none";
}

function lerMais(props){
    let mais = document.getElementById('mais');

    mais.style.display = "block";
    props.style.display = "none";
}

// SCRIPT PARA A GALERYA
var idAtual = undefined;
var maxImg = +document.querySelector(".servidor-galery").ariaValueMax;

function abrirImg(props){
    const imgAtual = document.getElementById(props).src;
    const imagem = document.querySelector("#imagem");
    const painel = document.querySelector("#area-imagem");

    if(typeof props != "string"){
        idAtual = props;
        painel.style.display = "flex";
        imagem.src = imgAtual;
    }else{
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        // idAtual = props;
        if(width > 750){
            painel.style.display = "flex";
            imagem.src = imgAtual;
            imagem.style.width = "400px";
            imagem.style.height = "400px";
            prev.style.display = "none";
            next.style.display = "none";
        }else{
            painel.style.display = "flex";
            imagem.src = imgAtual;
            prev.style.display = "none";
            next.style.display = "none";
        }
    }
}

function fecharImg(){
    const painel = document.querySelector("#area-imagem");
    const imagem = document.querySelector("#imagem");
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    idAtual = undefined;
    imagem.src = "";
    painel.style.display = "none";
    prev.style.display = "flex";
    next.style.display = "flex";
}

function next(){
    var imagemAtual = document.querySelector("#imagem");
    
    if(idAtual < maxImg){
        idAtual = idAtual + 1;
        var next = document.getElementById(idAtual).src;
        console.log(idAtual);
        imagemAtual.src = next;
    }else if(idAtual == maxImg){
        idAtual = 1;
        document.querySelector("#imagem").src = document.getElementById(idAtual).src;
    }
    else{
        idAtual = 1;
        imagemAtual.src = "";
    }
}

function prev(){
    var imagemAtual = document.querySelector("#imagem");

    if(idAtual > 1){
        idAtual = idAtual - 1;
        console.log(idAtual);
        var prev = document.getElementById(idAtual).src
        imagemAtual.src = prev
    }else if(idAtual == 1){
        document.querySelector("#imagem").src = document.getElementById(maxImg).src;
        idAtual = maxImg
        console.log(idAtual);
    }
}

// SCRIPT PARA O DOWNLOAD
function baixarFull(){
    window.open(
        "https://drive.google.com/file/d/1DmtsTL_EnBYF0hFVoOZI4wdeyCf9W6kC/view",
        "pagina",
        "width=800px, height=500px,top=50",
    );
}


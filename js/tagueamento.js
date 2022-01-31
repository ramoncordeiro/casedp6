// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

/* - CODE SNIPPETS - PAGE INDEX - */

$(document).ready(function(){
  if (window.location.pathname == '/index.html') {
    ga('send', 'pageview', '/index');
  }
  else if (window.location.pathname == '/analise.html') {  
    ga('send', 'pageview', '/analise');
  }
  else if (window.location.pathname == '/sobre.html') {  
    ga('send', 'pageview', '/sobre');
  }
  });

//ga('send', 'pageview', '/index');

document.getElementById("menu-lista-contato").onclick = eventContatoFunc;
function eventContatoFunc(e) {
          //if(eventContato){          
                    ga('send', 'event', {
                                        'eventCategory': 'menu',
                                        'eventAction': 'entre_em_contato',
                                        'eventLabel': 'link_externo' // CORRIGIR ISSO AQUI PARA FUNCIONAR BEM. NAO ESTA PASSANDO LABEL
                                      }); //}
}

//event download_pdf
document.getElementById("menu-lista-download").onclick = eventDownloadFunc;
function eventDownloadFunc(e) {
         ga('send', 'event', {
              'eventCategory': 'menu',
              'eventAction': 'download_pdf',
              'eventLabel': 'download_pdf' // CORRIGIR ISSO AQUI PARA FUNCIONAR BEM. NAO ESTA PASSANDO LABEL
          }); //}
}


/*  - CODE SNIPPETS - PAGE ANALISE - */
//ga('send', 'pageview', '/analise');

$( ".card.card-montadoras" ).click(function(){
  cardname = $(this).attr('data-name');
  ga('send', 'event', {
    'eventCategory': 'analise',
    'eventAction': 'ver_mais',
    'eventLabel': cardname
  });
});
  

/* - CODE SNIPPETS - PAGE SOBRE  */
//ga('send', 'pageview', '/sobre');

function eventPreencheuNome(){
  const idInput = event.target.id
  event.stopPropagation();
  console.log(idInput)
  //b = String(idInput)
  const a = document.getElementById("nome"); 
  console.log("de novo" + a)
  // The name need to have more than 2 caracters ------- MUITO IMPORTANTE PARA O README
  if(a.value.length > 2) {
    a.addEventListener('blur', sentEvent("nome"))
    /*a.addEventListener('blur', (e) => {
          ga('send', 'event', {
            'eventCategory': 'contato',
            'eventAction': 'nome',
            'eventLabel': 'preencheu'
          });       
    }, true); */
   } 
     
  
}

function sentEvent(actionName){
  ga('send', 'event', {
    'eventCategory': 'contato',
    'eventAction': actionName,
    'eventLabel': 'preencheu'
  });
}

function eventPreencheuEmail(){
  //const idInput = event.target.id
  event.stopPropagation();
  const emailElement = document.getElementById("email"); 
  console.log("de novo" + emailElement)
  // The EMAIL need to have more than 3 caracters ------- VERY IMPORTANTE TO README
  if(emailElement.value.length > 3) {
    emailElement.addEventListener('blur', sentEvent("email"))
  } 
} 

function eventPreencheuTelefone(){
  event.stopPropagation();
  const phoneElement = document.getElementById("telefone"); 
  console.log("de novo" + phoneElement)
  // The PHONE need to have more than 3 caracters -------   VERY IMPORTANTE TO README
  if(phoneElement.value.length > 2) {
    phoneElement.addEventListener('blur', sentEvent("telefone"))
  } 
} 


function eventPreencheuAceito(){
  const acceptElement = document.getElementById("aceito"); 
  if(acceptElement.checked){
    console.log(acceptElement.checked)
    sentEvent("aceito")
  } 
} 

function eventSendForm(){
  //event.stopPropagation();
  //e.preventDefault();
  var bo = document.getElementsByClassName("lightbox")
  var submits = jQuery('.contato button[type="submit"]');
  jQuery('.contato').on('submit', function (e) {
  submits.attr('enabled', 'enabled');
  e.preventDefault();
  bo.addEventListener('submit', sendFormGA())
  /*setTimeout(function(){
    ga('send', 'event', {
      'eventCategory': 'contato',
      'eventAction': 'enviado',
      'eventLabel': 'enviado'
    });
  },1800);*/ 
}); 
}

function sendFormGA(){
  setTimeout(function(){
    ga('send', 'event', {
      'eventCategory': 'contato',
      'eventAction': 'enviado',
      'eventLabel': 'enviado'
    });
  },1800);

}

//onblur="eventNomePreencheu()"
//onfocusout="myFunction()
/* 
function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
*/
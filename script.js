import { dialogos } from "./json.js";


const createElement = (elementName, attributes) => {
    const element = document.createElement(elementName)
    const attributesAsArray = Object.entries(attributes)
    attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value))
    return element
}

const arrDivs = []
const arrImgs = []
const arrP = []

const main = document.querySelector('main')

const leftImg = document.querySelector('.left img')
const rightImg = document.querySelector('.right img')

main.scrollTop += 1300;

const headerPergunta1 = createElement('h5', { class: 'header-pergunta'})
const pergunta1 = createElement('div', { class: 'pergunta pergunta1'})
const p1_enunciado1 = createElement('h5', { class: 'enunciado enunciado1', 'data-alternativa': '1'})
const p1_enunciado2 = createElement('h5', { class: 'enunciado enunciado2', 'data-alternativa': '2'})
headerPergunta1.textContent = 'Opções:'
p1_enunciado1.textContent = 'Unidade Curricular 1'
p1_enunciado2.textContent = 'Unidade Curricular 2'
pergunta1.appendChild(headerPergunta1)
pergunta1.appendChild(p1_enunciado1)
pergunta1.appendChild(p1_enunciado2)

console.log(pergunta1)


const headerPergunta2 = createElement('h5', { class: 'header-pergunta'})
const pergunta2 = createElement('div', { class: 'pergunta pergunta2'})
const p2_enunciado1 = createElement('h5', { class: 'enunciado enunciado1', 'data-alternativa': '1'})
const p2_enunciado2 = createElement('h5', { class: 'enunciado enunciado2', 'data-alternativa': '2'})
const p2_enunciado3 = createElement('h5', { class: 'enunciado enunciado3', 'data-alternativa': '3'})
const p2_enunciado4 = createElement('h5', { class: 'enunciado enunciado4', 'data-alternativa': '4'})
headerPergunta2.textContent = 'Opções:'
p2_enunciado1.textContent = 'Aula 1 - Planejamento de Carreira'
p2_enunciado2.textContent = 'Aula 2 - Introdução às funções da administração'
p2_enunciado3.textContent = 'Aula 3 - A organização e a rotina do Assistente Administrativo'
p2_enunciado4.textContent = 'Aula 4 - Atendimento ao cliente'
pergunta2.appendChild(headerPergunta2)
pergunta2.appendChild(p2_enunciado1)
pergunta2.appendChild(p2_enunciado2)
pergunta2.appendChild(p2_enunciado3)
pergunta2.appendChild(p2_enunciado4)

console.log(pergunta1)


for(let i=0;i<11; i++){
    let classeDePosicionamentoDoBalao = ( i % 2) ? 'mensagem enviada' : 'mensagem recebida'   
    arrDivs.push(createElement('div', { class: classeDePosicionamentoDoBalao })) 
}

for(let i=0;i<11; i++){
    let srcPersonagemImg = ( i % 2) ? 'assets/do-utilizador2.svg' : 'assets/do-utilizador1.svg'
    arrImgs.push(createElement('img', { src: srcPersonagemImg, class: 'd-sm-none avatar left-avatar' })) 
}

for(let i=0;i<11; i++){
    arrP.push(createElement('p', {})) 
}


for(let i=1;i<11; i++){
    arrP[i].textContent = dialogos[(i-1)].texto_dialogo.text
    arrDivs[i].appendChild(arrImgs[i])
}



const wrapperDialogContent_1 = createElement('div', { class: 'wrapper-dialog-content-enviada'})
//const wrapperDialogContent_2 = createElement('div', { class: 'wrapper-dialog-content-recebida-resposta-pergunta'})
const wrapperDialogContent_2 = createElement('div', { class: 'wrapper-dialog-content-enviada'})
const wrapperDialogContent_3 = createElement('div', { class: 'wrapper-dialog-content-recebida'})
const wrapperDialogContent_4 = createElement('div', { class: 'wrapper-dialog-content-enviada'})
const wrapperDialogContent_5 = createElement('div', { class: 'wrapper-dialog-content-enviada video'})
const wrapperDialogContent_6 = createElement('div', { class: 'wrapper-dialog-content'})
const wrapperDialogContent_7 = createElement('div', { class: 'wrapper-dialog-content'})
const wrapperDialogContent_8 = createElement('div', { class: 'wrapper-dialog-content'})
const wrapperDialogContent_9 = createElement('div', { class: 'wrapper-dialog-content'})
const wrapperDialogContent_10 = createElement('div', { class: 'wrapper-dialog-content'})


wrapperDialogContent_1.appendChild(arrP[1])
wrapperDialogContent_2.appendChild(arrP[2])
wrapperDialogContent_3.appendChild(arrP[3])
wrapperDialogContent_4.appendChild(arrP[4])
wrapperDialogContent_5.appendChild(arrP[5])
wrapperDialogContent_6.appendChild(arrP[6])
wrapperDialogContent_7.appendChild(arrP[7])
wrapperDialogContent_8.appendChild(arrP[8])
wrapperDialogContent_9.appendChild(arrP[9])
wrapperDialogContent_10.appendChild(arrP[10])

arrDivs[1].appendChild(wrapperDialogContent_1)
arrDivs[2].appendChild(wrapperDialogContent_2)
arrDivs[3].appendChild(wrapperDialogContent_3)
arrDivs[4].appendChild(wrapperDialogContent_4)
arrDivs[5].appendChild(wrapperDialogContent_5)
arrDivs[6].appendChild(wrapperDialogContent_6)
arrDivs[7].appendChild(wrapperDialogContent_7)
arrDivs[8].appendChild(wrapperDialogContent_8)
arrDivs[9].appendChild(wrapperDialogContent_9)
arrDivs[10].appendChild(wrapperDialogContent_10)

console.log(arrDivs[4])
arrDivs[4].classList.toggle('recebida')
arrDivs[4].classList.add('enviada')

arrDivs[5].querySelector('p').style.display = 'none'
const iframeVideo1 = createElement('iframe', { width: '420', height: '315', src: 'https://www.youtube.com/embed/gIOiyFVfl_8'})
arrDivs[5].querySelector('.video').appendChild(iframeVideo1)


    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`
    main.innerHTML = main.innerHTML + `<div class="hide">HHHHHHHHHHHHHH</div>`

    const svgSpinner = document.createElement('img')
    svgSpinner.setAttribute('class', 'svg-spinner-esquerda')
    svgSpinner.src = 'assets/3-dots-scale.svg'
    const svgSpinnerAbertura = document.querySelector('.spinner_abertura')







    setTimeout(() => {        
        svgSpinnerAbertura.classList.toggle('hide')
    }, 1000);















    // Início da primeira mensagem - Fabi
    setTimeout(() => {
        rightImg.src = "assets/chefe-digitando.gif" // Fabi digitando - aguarda 2 segundos
    }, 1000);
    setTimeout(() => {
        svgSpinner.setAttribute('class', 'svg-spinner-direita') // spinner sendo exibido na direita
        arrDivs[1].appendChild(svgSpinner)
        let textoDaMensagem = 'Olá eu sou a Fabi, como posso te ajudar?'
        arrDivs[1].querySelector('p').textContent = textoDaMensagem
        main.appendChild(arrDivs[1])    
        main.scrollTop += 1300;
        rightImg.src = "assets/chefe-idle.gif" // Pára personagem  
        svgSpinnerAbertura.classList.toggle('hide')
    }, 2000);
    // Fim da primeira mensagem - Fabi










    
    // Início da segunda mensagem - Fabi
    setTimeout(() => {
        rightImg.src = "assets/chefe-digitando.gif" // Fabi digitando - aguarda 2 segundos
    }, 3000);
    setTimeout(() => {
        svgSpinner.setAttribute('class', 'svg-spinner-direita') // spinner sendo exibido na direita
        arrDivs[2].classList.remove('recebida')  // remove classe "enviada", para que o balão seja exibida à esquerda
        arrDivs[2].classList.add('enviada')    // e adiciona classe "recebida", para que o balão seja exibida à esquerda
        arrDivs[2].appendChild(svgSpinner)
        let textoDaMensagem = 'Selecione uma das opções abaixo:'
        arrDivs[2].querySelector('p').textContent = textoDaMensagem
        main.appendChild(arrDivs[2])    
        main.scrollTop += 1300;
        rightImg.src = "assets/chefe-idle.gif" // Pára personagem Selecione uma das opções abaixo: 
        //svgSpinnerAbertura.classList.toggle('hide')
    }, 4000);
    // Fim da primeira mensagem - Fabi









    // ------

            // Início exibição da caixa com as opcões e o enunciado da primeira pergunta 1
            setTimeout(() => {
                rightImg.src = "assets/chefe-digitando.gif" // animação Fabi digitando - aguarda 7 segundos
            }, 7000);
            setTimeout(() => {
                svgSpinner.setAttribute('class', 'svg-spinner-direita') // spinner sendo exibido na direita
                const h5ElementosDaPergunta1 = pergunta1.querySelectorAll('h5')                
                h5ElementosDaPergunta1[0].textContent = 'Opções:'
                h5ElementosDaPergunta1[1].textContent = 'Unidade Curricular 1'
                h5ElementosDaPergunta1[2].textContent = 'Unidade Curricular 2'
                pergunta1.appendChild(svgSpinner)
                main.appendChild(pergunta1)    
                main.scrollTop += 1300;
                rightImg.src = "assets/chefe-idle.gif" // personagem parado  
            }, 8000);
            // Fim exibição da caixa que exibe as opcões e o enunciado da primeira pergunta

                    setTimeout(() => { // executa este bloco a partir do segundo 9000 - BLOCO ATRELADO À PERGUNTA 1
                        const listenerPergunta1 = main.querySelectorAll('.enunciado')
                        listenerPergunta1.forEach( item => {
                            item.addEventListener('click', function(e){
                                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                if(parseInt(parseInt(e.target.dataset.alternativa)) === 1){ //////////////// SE A OPÇÃO 1 FOR ESCOLHIDA /////////////////





                                      // OPÇÃO 1 FOI A ESCOLHIDA - MUDA COR DO BALÃO PARA AMARELO - PERSONAGEM DA ESQUERDA INICIA DIGITAÇÃO [RESPONDENDO À PERGUNTA - LÉO] - INÍCIO
                                      arrDivs[3].classList.remove('enviada') // remove classe "enviada", para que o balão seja exibida à esquerda
                                      arrDivs[3].classList.add('recebida') // e adiciona classe "recebida", para que o balão seja exibida à esquerda
                                      arrDivs[3].querySelector('p').style.backgroundColor = 'cornsilk' // muda cor do balão
                                      arrDivs[3].querySelector('p').textContent = e.target.textContent // TEXTO DO BALÃO DE RESPOSTA TRAZIDO DO CLIQUE DA OPÇÃO 1 [Formatar o computador?]
                                      e.target.classList.add('active') // grifa fundo em amarelo "forte" para sinalizar qual opção foi clicada [classe active]
                                      setTimeout(() => {
                                          leftImg.src = "assets/func-digitando.gif" // personagem inicia digitação e espera 1 segundo
                                      }, 1000);                                                
                                      setTimeout(() => {
                                          e.target.parentNode.classList.toggle('hide-pergunta') // esconde box da pergunda e opções
                                          svgSpinner.setAttribute('class', 'svg-spinner-direita') // ativa spinner à direita
                                          main.style.overflowY = 'scroll' // exibe barra de rolagem eixo Y
                                          main.appendChild(arrDivs[3]) // insere a div completa, com todos os ajustes, na área de digitação [main]  
                                          arrDivs[3].querySelector('div').classList.remove('wrapper-dialog-content-recebida') // remove e adiciona classes - mudança de posição e fundo do balão [amarelo]
                                          arrDivs[3].querySelector('div').classList.add('wrapper-dialog-content-recebida-resposta-pergunta') // remove e adiciona classes - mudança de posição e fundo do balão [amarelo]  
                                          main.scrollTop += 1300; // posiciona barra de rolagem na base da área de mensagens    
                                          leftImg.src = "assets/func-idle.gif" // para personagem da esquerda  
                                      }, 2000);
                                      // OPÇÃO 1 FOI ESCOLHIDA E RESPONDIDA - FIM







                                    // Início exibição da caixa com as opcões e o enunciado da pergunta 2
                                    setTimeout(() => {
                                        rightImg.src = "assets/chefe-digitando.gif" // Fabi digitando - aguarda 7 segundos
                                    }, 3000);
                                    setTimeout(() => {
                                        svgSpinner.setAttribute('class', 'svg-spinner-direita') // spinner sendo exibido na direita
                                        const h5ElementosDaPergunta2 = pergunta2.querySelectorAll('h5') 
                                        h5ElementosDaPergunta2[0].textContent = 'Opções:'
                                        h5ElementosDaPergunta2[1].textContent = 'Aula 1 - Planejamento de Carreira'
                                        h5ElementosDaPergunta2[2].textContent = 'Aula 2 - Introdução às funções da administração'
                                        h5ElementosDaPergunta2[3].textContent = 'Aula 3 - A organização e a rotina do Assistente Administrativo'
                                        h5ElementosDaPergunta2[4].textContent = 'Aula 4 - Atendimento ao cliente'
                                        pergunta1.appendChild(svgSpinner)
                                        main.appendChild(pergunta2)     
                                        main.scrollTop += 1300;
                                        rightImg.src = "assets/chefe-idle.gif" // para personagem
                                        
                                        
                                        const listenerPergunta2 = main.querySelectorAll('.enunciado')
                                        listenerPergunta2.forEach( item => {
                                            item.addEventListener('click', function(e){
                                                console.log(`Cliquei na alternativa: ${e.target.dataset.alternativa}`)
                                                e.target.classList.add('active') // grifa fundo em amarelo "forte" para sinalizar qual opção foi clicada [classe active]
                                            })
                                        })

                                    }, 4000);
                                    // Fim exibição da caixa que exibe as opcões e o enunciado da primeira pergunta













                                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                                    
                                } else if (parseInt(parseInt(e.target.dataset.alternativa)) === 2){ //////////////// CASO A OPÇÃO 2 SEJA ESCOLHIDA /////////////////
                                    // OPÇÃO 2 FOI A ESCOLHIDA - MUDA COR DO BALÃO PARA AMARELO - PERSONAGEM DA ESQUERDA INICIA DIGITAÇÃO [RESPONDENDO À PERGUNTA - LÉO] - INÍCIO
                                    arrDivs[7].classList.remove('enviada')  // remove classe "enviada", para que o balão seja exibida à esquerda
                                    arrDivs[7].classList.add('recebida')    // e adiciona classe "recebida", para que o balão seja exibida à esquerda
                                    arrDivs[7].querySelector('p').style.backgroundColor = 'cornsilk' // muda cor do balão
                                    arrDivs[7].querySelector('p').textContent = e.target.textContent // TEXTO DO BALÃO DE RESPOSTA TRAZIDO DO CLIQUE DA OPÇÃO 2 [Reinstalar o Windows?]
                                    e.target.classList.add('active') // grifa fundo em amarelo "forte" para sinalizar qual opção foi clicada [classe active]
                                    setTimeout(() => {
                                        leftImg.src = "assets/func-digitando.gif" // personagem da esqueda digitando
                                    }, 1000);                                                
                                    setTimeout(() => {
                                        e.target.parentNode.classList.toggle('hide-pergunta')
                                        svgSpinner.setAttribute('class', 'svg-spinner-direita') // ativa spinner à direita
                                        main.style.overflowY = 'scroll' // exibe barra de rolagem eixo Y
                                        main.appendChild(arrDivs[7]) // insere a div completa, com todos os ajustes, na área de digitação [main]  
                                        arrDivs[7].querySelector('div').classList.remove('wrapper-dialog-content') // remove e adiciona classes - mudança de posição e fundo do balão [amarelo]
                                        arrDivs[7].querySelector('div').classList.add('wrapper-dialog-content-recebida-resposta-pergunta') // remove e adiciona classes - mudança de posição e fundo do balão [amarelo] 
                                        main.scrollTop += 1300; // posiciona barra de rolagem na base da área de mensagens    
                                        leftImg.src = "assets/func-idle.gif" // para personagem da esquerda    
                                    }, 1800);
                                    // OPÇÃO 2 FOI A ESCOLHIDA E RESPONDIDA - FIM
                                    // ------------------------------------------------------------
                                            // INÍCIO DIGITAÇÃO DA FABI - APÓS RESPOSTA DO LÉO
                                            setTimeout(() => {
                                                rightImg.src = "assets/chefe-digitando.gif" // personagem da esqueda digitando
                                            }, 3000);
                                            setTimeout(() => {
                                                svgSpinner.setAttribute('class', 'svg-spinner-direita')
                                                arrDivs[8].classList.remove('recebida') // remove classe "enviada", para que o balão seja exibida à esquerda
                                                arrDivs[8].classList.add('enviada') // e adiciona classe "recebida", para que o balão seja exibida à esquerda
                                                arrDivs[8].appendChild(svgSpinner)
                                                arrDivs[8].querySelector('div').classList.remove('wrapper-dialog-content') // remove e adiciona classes - mudança de posição e fundo do balão [amarelo]
                                                arrDivs[8].querySelector('div').classList.add('wrapper-dialog-content-enviada') // remove e adiciona classes - mudança de posição e fundo do balão [amarelo]
                                                let textoDaMensagem = 'Acho que não é uma boa ideia.'
                                                arrDivs[8].querySelector('p').textContent = textoDaMensagem
                                                main.appendChild(arrDivs[8]) // insere a div completa, com todos os ajustes, na área de digitação [main]      
                                                main.scrollTop += 1300; // posiciona barra de rolagem na base da área de mensagens
                                                rightImg.src = "assets/chefe-idle.gif" // para personagem da direita    
                                            }, 4000);
                                            // FIM DIGITAÇÃO DA FABI - APÓS RESPOSTA DO LÉO
                                    // ------------------------------------------------------------ 
                                    // INÍCIO DIGITAÇÃO DA FABI - DANDO SEQUÊNCIA À CONVERSA
                                    setTimeout(() => {
                                    rightImg.src = "assets/chefe-digitando.gif" // personagem da direita digitando
                                    }, 5000); // 80000
                                    setTimeout(() => {
                                    svgSpinner.setAttribute('class', 'svg-spinner-direita') // ativa spinner à direita
                                    arrDivs[9].appendChild(svgSpinner)
                                    arrDivs[9].querySelector('div').classList.remove('wrapper-dialog-content') // remove e adiciona classes - mudança de posição e fundo do balão
                                    arrDivs[9].querySelector('div').classList.add('wrapper-dialog-content-enviada') // remove e adiciona classes - mudança de posição e fundo do balão
                                    let textoDaMensagem = 'Acesse o link abaixo:'
                                    arrDivs[9].querySelector('p').textContent = textoDaMensagem
                                    main.appendChild(arrDivs[9]) // insere a div completa, com todos os ajustes, na área de digitação [main]     
                                    main.scrollTop += 1300; // posiciona barra de rolagem na base da área de mensagens
                                    rightImg.src = "assets/chefe-idle.gif" // para personagem da direita   
                                    }, 6000); // 82000
                                    // FIM DIGITAÇÃO DA FABI - DANDO SEQUÊNCIA À CONVERSA
                                    // ------------------------------------------------------------
                                            // INÍCIO DIGITAÇÃO DA FABI - DANDO SEQUÊNCIA À CONVERSA
                                            setTimeout(() => {
                                            arrDivs[10].classList.remove('recebida')
                                            arrDivs[10].classList.add('enviada')
                                            rightImg.src = "assets/chefe-digitando.gif" // personagem da direita digitando
                                            svgSpinner.style.opacity = 0; // excondendo spinner
                                            }, 7000); // 90000
                                            setTimeout(() => {
                                            svgSpinner.setAttribute('class', 'svg-spinner-direita') // ativa spinner à direita
                                            arrDivs[10].appendChild(svgSpinner)
                                            arrDivs[10].querySelector('p').innerHTML = '<i class="fa-solid fa-paperclip"></i> <a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://google.com.br" target="_blank">https://google.com.br</a>';
                                            arrDivs[10].querySelector('div').classList.remove('wrapper-dialog-content') // remove e adiciona classes - mudança de posição e fundo do balão
                                            arrDivs[10].querySelector('div').classList.add('wrapper-dialog-content-enviada') // remove e adiciona classes - mudança de posição e fundo do balão
                                            main.appendChild(arrDivs[10]) // insere a div completa, com todos os ajustes, na área de digitação [main]
                                            main.scrollTop += 1300; // posiciona barra de rolagem na base da área de mensagens   
                                            rightImg.src = "assets/chefe-idle.gif" // para personagem da direita    
                                            }, 8000); // 92000
                                            // FIM DIGITAÇÃO DA FABI - DANDO SEQUÊNCIA À CONVERSA
                                    // ------------------------------------------------------------
                                    // INÍCIO AJUSTES FINAL DO DIÁLOGO
                                    setTimeout(() => {
                                        const hideAll = document.querySelectorAll('.hide')
                                        hideAll.forEach(function(elementHide){elementHide.remove()})
                                    }, 9000);
                                    // FIM AJUSTES FINAL DO DIÁLOGO                                                          
                                }
                            })
                        })        
                    }, 9000); 
                    // ------------------------------------------------------------















































































    
    /*setTimeout(() => {
        const hideAll = document.querySelectorAll('.hide')
        hideAll.forEach(function(elementHide){elementHide.remove()})
    }, 13000);*/




    /*

    mensagem fabi

    mensagem fabi


    pergunta 1
    pergunta 1  -   opção 1 -> Unidade Curricular 1
                    opção 2 -> Unidade Curricular 2

    mensagem léo - resposta à pergunta 1 - opção escolhida

    
        se a resposta para pergunta 1, for a opção 1 = Unidade Curricular 1
                                faça isto...
                                    pergunta 1.1
                                        pergunta 1.1.1  -   opção 1 -> Aula 1 – Planejamento de Carreira
                                        pergunta 1.1.2  -   opção 2 -> Aula 2 - Introdução às funções da administração
                                        pergunta 1.1.3  -   opção 3 -> Aula 3 - A organização e a rotina do Assistente Administrativo
                                        pergunta 1.1.4  -   opção 4 -> Aula 4 - Atendimento ao cliente
                                            se a resposta for a opção 1.1.1 = Aula 1 – Planejamento de Carreira
                                                faça isto...
                                            se a resposta for a opção 1.1.2 = Aula 2 - Introdução às funções da administração
                                                faça isto...
                                            se a resposta for a opção 1.1.3 = Aula 3 - A organização e a rotina do Assistente Administrativo
                                                faça isto...
                                            se a resposta for a opção 1.1.4 = Aula 4 - Atendimento ao cliente

        se a resposta para pergunta 1, for a opção 2 - Unidade Curricular 2
                                faça isto...
                                    pergunta 1.2
                                        pergunta 1.2.1  -   opção 1 -> Aula 1 – Planejamento de Carreira
                                        pergunta 1.2.2  -   opção 2 -> Aula 2 - Introdução às funções da administração
                                        pergunta 1.2.3  -   opção 3 -> Aula 3 - A organização e a rotina do Assistente Administrativo
                                        pergunta 1.2.4  -   opção 4 -> Aula 4 - Atendimento ao cliente
                                            se a resposta for a opção 1.2.1 = Aula 1 – Planejamento de Carreira
                                                faça isto...
                                            se a resposta for a opção 1.2.2 = Aula 2 - Introdução às funções da administração
                                                faça isto...
                                            se a resposta for a opção 1.2.3 = Aula 3 - A organização e a rotina do Assistente Administrativo
                                                faça isto...
                                            se a resposta for a opção 1.2.4 = Aula 4 - Atendimento ao cliente





















    */
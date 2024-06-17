const div1 = elementFactory('div')
const div2 = elementFactory('div')
const par1 = elementFactory('p')
const par2 = elementFactory('p')

attributeCreate(par1, 'id', 'testando')
attributeCreate(par1, 'class', 'dialogo recebido')

console.log(div1)
console.log(div2)
console.log(par1)
console.log(par2)









function elementFactory (tipo) {
    return document.createElement(tipo)
}

function attributeCreate (elemento, tipo, nome) {
    elemento.setAttribute(tipo, nome)
}






/*
<div>
    <ul>
        <li>Neste caso, você seguiria viagem, sem prestar socorro?</li>
        <li>Estacionava no acostamento e pedia ajuda aos demais condutores?</li>
        <li>Ou simplesmente parava o carro no estacionamento e ficaria apenas assistindo&gt;</li>
    </ul>
</div>
*/
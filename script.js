let listaTela = window.document.getElementById("lstValores")
let entrada = window.document.getElementById("txtNumero")
let listaTotal = []
let resultado = window.document.getElementById("res")
function preencheLista(){
    listaTela.innerHTML = ""
    listaTotal.forEach((a) => { //o forEach recebe três parametros elemento, indice (opcional) e vetor (opcional)
        listaTela.innerHTML += `<option>Valor ${a} adicionado.</option>`
    });
}
function add(){
    resultado.innerHTML = ""
    let numero = Number(entrada.value)
    if (numero > 100 || numero < 1){
        window.alert(`O valor ${numero} está fora do intervalo (do 0 ao 100).`)
    }else{
        if(listaTotal.indexOf(numero) == -1){
            listaTotal.push(numero)
            preencheLista()
        }else{
            window.alert(`O valor ${numero} já foi adicionado à lista.`)
        }
    }
    entrada.value = ""
    entrada.focus()
}
function finalizar(){
    if(listaTotal.length == 0){
        resultado.innerHTML = "Adicione ao menos um valor na lista."
    }else{
        resultado.innerHTML = "Calculando.."
        const total = listaTotal.length
        const maior = listaTotal.sort((a, b) => b-a)[0]
        const menor = listaTotal.sort((a, b) => a-b)[0]
        const somaTotal = listaTotal.reduce((a, b) => a+b)
        const mediaTotal = (listaTotal.reduce((a, b) => a+b))/listaTela.length
        const selecionado = listaTela.value.replace("Valor ","").replace(" adicionado.", "")
        resultado.innerHTML = `Ao todo, temos ${total} números cadastrados.`
        resultado.innerHTML += `<br>O maior valor informado foi ${maior}.`
        resultado.innerHTML += `<br>O menor valor informado foi ${menor}.`
        resultado.innerHTML += `<br>Somando todos os valores, temos ${somaTotal}.`
        resultado.innerHTML += `<br>A média dos valores digitados é ${mediaTotal.toFixed(2).replace(".00" , "").replace(".", ",")}.`
        if(selecionado ==""){
            resultado.innerHTML += `<br>Nenhum valor está selecionado.`
        }else{
            resultado.innerHTML += `<br>O valor ${selecionado} está selecionado.`
        }
    }
    entrada.value = ""
    entrada.focus()
}
function zerar(){
    resultado.innerHTML = ""
    listaTotal = listaTotal.slice(0, 0)
    preencheLista()
    entrada.value = 0
    entrada.value = ""
    entrada.focus()
}
function enterPress(){
    if(event.keyCode === 13){ //o valor 13 significa que o enter foi pressionado
        add()
    }
}
//Abaixo fix um código para limitar a entrada de caracteres na caixa de números
function corta(){
    if (entrada.value.length > 3){
        entrada.value = entrada.value.slice(0, 3)
    }
    if (Number(entrada.value) > 100){
        entrada.value = 100
    }
}
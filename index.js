let n1 = prompt("digite o primeiro numero")
let n2 = prompt("digite o segundo numero")
n1 = Number(n1)
n2 = Number(n2)
const soma = n1 + n2
const subtracao = n1 - n2
const multiplicacao = n1 * n2
const divisao = n1 / n2
const resto = n1 % n2

alert("A soma dos 2 numero e: "+soma) 
alert("A subtracao dos 2 numero e: "+subtracao)
alert("A multiplicacao dos 2 numero e: "+multiplicacao)
alert("A divisao dos 2 numero e: "+divisao)
alert("A resto da divisao dos 2 numero e: "+resto)

if (soma%2 == 0){
alert("A soma dos 2 numeros e par: "+soma)
}else{
  alert("A soma dos 2 numeros e impar: "+ soma)
}

if(n1 == n2){
  alert("os numeros "+n1+" e "+n2+" sao Iguais")
}else{
  alert("os numeros "+n1+" e "+n2+" sao diferentes")
}
var ano = new Date()
console.log(ano)
var aatual = ano.getFullYear()
var mensagem = `Aproveite seus ${aatual - 2005} anos😎!` 
document.getElementById("mensagem-idade").innerHTML = mensagem
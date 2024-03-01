// 1- Pegar a data atual
var dataAtual = new Date();
// 2- A partir da data atual, calcular a data do próximo aniversario
anoNiver = dataAtual.getFullYear();

if (dataAtual.getMonth() == 5) {
    if (dataAtual.getDate() > 23){
        anoNiver++; // aumenta o ano se estamos depois de 23 de junho
        var is_today = false
    }
    else if (dataAtual.getDate() == 23){
        var is_today = true;
    }
}
else if (dataAtual.getMonth() > 5) {
    anoNiver++;
    var is_today = false
}
console.log(is_today)

if (!(is_today)){
    var niver = new Date(anoNiver,5,23,0,0,0,0);

    // 3- Calculo a diferença das duas e ponho nos textos
    var tempoRestante = (niver - dataAtual); // tempo restante em ms
    var segundosRestantes = (tempoRestante - (tempoRestante % 1000)) / 1000; // tempo restante em segundos

    // calculo dos minutos restantes
    var minutosRestantes = (segundosRestantes - (segundosRestantes % 60)) / 60;
    var segundosRestantes = segundosRestantes % 60;

    // calculo das horas
    var horasRestantes = (minutosRestantes - (minutosRestantes % 60)) / 60;
    var minutosRestantes = minutosRestantes % 60;

    // calculo dos dias
    var diasRestantes = (horasRestantes - (horasRestantes % 24)) / 24;
    var horasRestantes = horasRestantes % 24;

    // calculo dos meses
    var mesesRestantes = (diasRestantes- (diasRestantes % 30)) / 30;
    var diasRestantes = diasRestantes % 30;

    // exibindo os valores na tela
    document.getElementById("meses").innerHTML = mesesRestantes;
    document.getElementById("dias").innerHTML = diasRestantes;
    document.getElementById("horas").innerHTML = horasRestantes;
    document.getElementById("minutos").innerHTML = minutosRestantes;
    document.getElementById("segundos").innerHTML = segundosRestantes;

    // obs.: fazer isso a todo momento, como se fosse um cronometro mesmo
     setTimeout(function() {
         location.reload();
    }, 1000);
}
else {
    location.replace("parabens.html")
}

var resp = window.document.getElementById('saida');

// Lembre-se que toda variável declarada aqui fora possui escopo global. Veja mais sobre

function acao1(){
    resp.innerHTML +='<p>Clicou no primeiro botão<p>';

    const pi = 3.14//constante não pode ser alterada, diferente de var e let.
    let a = prompt("Informe um número");
    if (a != "6"){
        resp.innerHTML += '<h1>Diferente de 6</h1>';
    } else {
        resp.innerHTML += '<h1>Igual a 6</h1>';
    }
}

function acao2() {
resp.innerHTML += ',p>Clicou no segundo botão</p>';

switch (prompt("Como está o tempo Use chuvosso, ensolarado ou nublado.")) {
    //switch("chuvoso") {
    case "chuvoso":
        resp.innerHTML +=
    '<h1>Lembre-se de trazer guarda-chuva!</h1>';

    break;
    case "ensolarado":
        resp.innerHTML += '<h1>Vista roupas leves!</h1>';
        break;
        case "nublado":
            resp.innerHTML +='<h1>Vá lá fora!!!</h1>';
            break;
            default:
                resp.innerHTML += '<h1>Tempo desconhecido</h1>';
                break;
  }
}

function acao3(){
    resp.innerHTML +='<p>Clicou no terceiro botão'
}
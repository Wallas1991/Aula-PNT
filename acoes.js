var resp = window.document.getElementById('saida');

// Lembre-se que toda variável declarada aqui fora possui escopo global. Veja mais sobre

function acao1() {
    resp.innerHTML += '<p>Clicou no primeiro botão<p>';

    const pi = 3.14//constante não pode ser alterada, diferente de var e let.
    let a = prompt("Informe um número");
    if (a != "6") {
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
            resp.innerHTML += '<h1>Vá lá fora!!!</h1>';
            break;
        default:
            resp.innerHTML += '<h1>Tempo desconhecido</h1>';
            break;
    }
}

function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão'
}















































































































function acao11() {
    resp.innerHTML += '<p>Clicou no decimo primeiro botão<p>'
    //Criando m objeto notação literal.
    let hotel = { // O objeto é declarado como uma variavel.
        nome: "Hotel Maravilha",//as chaves são separadas do seu valor por dois pontos. Igual ao CSS.
        quartos: 40, //Separa com virgula cada propiedade e método.
        reservados: 25,
        piscina: true,
        tipoQuarto: ["simples", "duplo", "suite"],

        checkAvailability: function () {
            return this.quartos - this.reservados; //this = este objeto (objeto hotel)
        } //A palavra chave this indica que ele usa as propriedades do objeto atual.
    };

    let atrNome = document.getElementById('nome');
    atrNome.textContent = hotel.nome; //Acessando um objeto com a notação de ponto.
    // O ponto é conhecido como: Operador de membro.
    let atrQuartos = document.getElementById('quartos');
    atrQuartos.textContent = hotel.quartos;



    function acao12() {
        resp.innerHTML += '<p>Clicou no decimo segundo botão<p>'

        //Criando um objeto com a notação de construtor.
        var carro = new Object(); //Função do construtor object().

        carro.modelo = 'tracker'; //
        carro.ano = 2025;
        carro.fabricante = 'Chevrolet';
        carro.kmAtual = 123680;
        carro.proxTrocaOleo = 131680;

        carro.checkStatus = function () {
            return this.proxTrocaOleo - this.kmAtual;
        };
    }
    var atrModelo = document.getElementById('modelo');
    atrModelo.textContent = carro.modelo; //Acessando um objeto com a notação de ponto.

    var atrProxTrocaOleo = document.getElementById('oleoMotor');
    atrProxTrocaOleo.textContent = carro.checkStatus();

    var atrKmAtual = document.getElementById('kmAtual');
    atrKmAtual.textContent = carro.kmAtual;

    var atrAno = document.getElementById('ano');
    atrAno.textContent = carro.ano;

    var atrFabricante = document.getElementById('fabricante');
    atrFabricante.textContent = carro.fabricante;

}

function acao13() {
    resp.innerHTML += '<p>Clicou no decimo terceiro botão<p>'
    //Notação objeto construtor.
    function Mobilia(nome, largura, altura, peso) {//Construção do template. Nome começa com letra maiúcula.

        this.nome = nome; //Usamos o this para indicar a propriedade ou metodo que a função criou


        this.peso = peso;

    









            var listaObj = 
    }
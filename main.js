    function adicionar(valor) {
        document.getElementById("display").value += valor;
    }

    function limpar() {
        document.getElementById("display").value = "";
    }

    function calcular() {
        let expressao = document.getElementById("display").value;
        let resultado = eval(expressao); 
        document.getElementById("display").value = resultado;
    }
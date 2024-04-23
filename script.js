function cadastrar(){
    var cidade = document.getElementById("selecionarCity");
    var cidadeValor = cidade.value;
    cidade.value = "Selecione";


    var unidade = document.getElementById("unidadesMG");
    var unidadeCadastrada = unidade.value;
    unidade.value = "Selecione";

    var nome = document.getElementById("nomefunc");
    var funcionario = nome.value;
    nome.value = "";

    var email = document.getElementById("emails");
    var emailFunc = email.value;
    email.value = ""

    var senha = document.getElementById("senhas");
    var senhaFunc = senha.value;
    senha.value = "";


    window.location.href = "../index/cadastroRealizado.html";
          
}
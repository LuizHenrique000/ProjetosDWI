function buscarPersonagem() {
    const nomePersonagem = document.getElementById("nome_pokemon").value;
    //Pega o value vazio do input pokemon e coloca ele dentro da const

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + nomePersonagem,
        type: "get",
        //Faz um get na api pegando o nome que foi digitado e adicionado na const
        success: function (result) {
            document.getElementById("imagem").src = result.sprites.front_default
            //Em caso de sucesso a fuction com parâmetro result faz um document.getElementById de imagem e usa o .src para pegar a imagem da API
            const nomeResultado = document.getElementById("visorTexto").value = "Nome: "
                + result.name
            //Cria uma const para o texto, usando uma ul e buscando na api o nome do Pokemon.
            document.getElementById("visorTexto").innerHTML = nomeResultado;
            //Pega o elemento pelo id do textoDeRetorno e usando o .innerHTML altera o HTML interno fazendo ele receber a const
        }
    });
}


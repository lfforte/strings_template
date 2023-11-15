// =========================  EX 1, 2 e 3

/* function imprimirPessoa() {
    const nome = prompt("Digite seu nome: ");
    const corFavorita = prompt("Digite sua cor favorita: ");
    const citacao = prompt("Digite sua citacao favorita: ");

    // return console.log("A cor favorita de " + nome + " é " + corFavorita + ".\n Citção favorita: \"" + citacao + "\""); // concatenação
    // return console.log(`A cor favorita de ${nome} é ${corFavorita}.\n"${citacao}"`);  //templete string
    // return console.log(`Nome: ${nome} \n Cor favorita: ${corFavorita} \n Citação: "${citacao}"`);  //templete string
    return console.log(`${nome.toUpperCase()}\n ${nome.length}\n ${nome.includes("A")}`);
}

imprimirPessoa() */

// =========================  EX extra

const cadastroPessoa = () => {
    const nomeDoUsuario = prompt("Digite seu nome: ");
    const emailDoUsuario = prompt("Digite seu e-mail: ");

    // console.log(`O e-mail ${emailDoUsuario}, foi cadastrado com sucesso.\n. Boas vindas ${nomeDoUsuario}(${nomeDoUsuario.length}).`);

    let frase = `O e-mail ${emailDoUsuario}, foi cadastrado com sucesso.\n. Boas vindas ${nomeDoUsuario}(${nomeDoUsuario.length}).`;
    console.log(frase);

    let frase2 = frase.replaceAll("R", "X");
    console.log(frase2);

    let verificaEmail = frase.includes("@");
    console.log(`O e-mail possui \"@\": ${verificaEmail}`)

}

cadastroPessoa();
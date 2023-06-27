//tratamento de exceções
try{
    var cpfValido = false;
    if (!cpfValido){
        throw new Error('O CPF digitado não é válido');
    }
    console.log('CPF válido. Apto para prosseguir.');
}catch(ocorrencia){
    console.log(ocorrencia.message);
}



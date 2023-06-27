//arquivo com as funções da calculadora

exports.add = function add(x, y){
    return x + y;
}

exports.sub = function sub(x, y){
    return x - y;
}

exports.mult = function mult(x, y){
    return x * y;
}

exports.div = function div(x, y){
    return x / y;
}

//é necessário adicionar o export.nome para na hora de importar esse arquivo ser possível compreender que ele pode ser utilizado como módulo
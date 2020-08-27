chefe();
function chefe(){
    var vet =[];
    ex7(vet)
    cauculaM(vet)
}

function ex7(vet){
    var numero = Number (prompt('informe o numero '))
    do {
        vet.push(numero)
         numero = Number (prompt('informe o numero, informe 0 para sair  '))


    }
    while(numero >= 0)

}

function cauculaM(){
    var soma = 0
    for(var i=0; i < vet.length ; i++){
        soma = soma =vet[i]

    }
    console.log('a media é ${soma/vet.length}')
}
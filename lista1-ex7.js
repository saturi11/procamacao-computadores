chefe();
function chefe(){
    var vet =[];
    ex7(vet)
}

function ex7(vet){
    var numero = Number (prompt('informe o numero '))
    do {
        vet.push(numero)
         numero = Number (prompt('informe o numero, informe 0 para sair  '))


    }
    while(numero >= 0)

}
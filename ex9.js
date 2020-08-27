chefe()
function chefe(){
    var number = Number(prompt('infrome um numero') )
    ex9(numero)
}
 function ex9(num){
     var soma = 0
     for (var divisor=num; divisor >1 ;divisor--){
         if(num% divisor == 0){
             soma = soma + divisor
         }
          console.log('a soma dos divisores é ${num}')
     }

 }
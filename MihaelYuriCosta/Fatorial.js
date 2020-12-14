function fatorial (a) {
    var b 
    b = 1 // Cria um auxiliar para multiplicar o primeiro número.

        for(i = a; i > 0; i--){
         b = b * i               // Realiza a operação de multiplicação fatorial até q se chegue em 1.
        
         }
         console.log(b) 
           
}

fatorial(3)
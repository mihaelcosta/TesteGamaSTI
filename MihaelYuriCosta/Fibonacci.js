
function fibonacci (x) {
    if(x == 1){ // Indica que o primeiro valor é 1
        return x
    }else if(x == 2){
        return(x-1) // Indica que o segundo valor também é 1.
    }else{
        return( fibonacci(x-1) + fibonacci(x-2)) // Aplica a recursividade de que o número é a soma dos 2 anteriores na sequência.
    }
}

console.log(fibonacci(20))

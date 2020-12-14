
//Recebe os valores do html.

var caixa1 = document.querySelector('#caixa1')       
var caixa2 = document.querySelector('#caixa2')       
var calcular = document.querySelector('#calcular')   
var res = document.querySelector('#resp')      
var conseguiu = document.querySelector('#conseguiu')  
var close = document.querySelector('#close')
var formulario = document.querySelector('#formulario')
var rec = document.querySelector('#recarregar')
var b2 = document.querySelector('#borda2')



var result = [] //Cria o vetor do resultado.




calcular.addEventListener('click',()=>{
    
    var soma = fatorial(caixa1.value) + fibonacci(caixa2.value) // Realiza a soma entre o resultado do fatorial e do fibonacci.
    var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] //Vetor do alfabeto.
    
    soma = soma.toString() // Transforma o número em string.
    
    if(soma.length % 2 != 0){
        soma = '0' + soma      //Aplica o '0' no começo do número caso o numero de caracteres seja ímpar.  
    }
    
    var aux = 0
    
    console.log(soma)
    var arraysoma = soma.split('') //Transforma a soma em array.
    
    for(i = 0;i < arraysoma.length; i = i+2){
        
        arraysoma[i]
        b = i + 1                                  //Cria um array novo com os números de 2 em 2 dígitos.
        result[aux] = `${arraysoma[i]}` + `${arraysoma[b]}`     
        aux++

        }

    for(i = 0; i < result.length; i++){

        if(result[i] >= 1 && result[i] <= 26){
            result[i] = letras[parseInt(result[i])]   //Verifica se o número corresponde a algum elemento do vetor.
        }
        
    }
   result = result.join('')
   console.log(result)
   
})

//Alerta  site gama.
calcular.addEventListener('click',()=>{
    if(result == 'c679546q'){
        conseguiu.classList.add('show')
        
    }
})

//Alerta com site gama fechar.
calcular.addEventListener('click',()=>{
    if(result == 'c679546q'){
        conseguiu.classList.add('show')
        close.addEventListener('click',()=>{
            conseguiu.classList.remove('show')            
        })
    
}})

//Printa o resultado
calcular.addEventListener('click',()=>{

    
    if(caixa1.value != '' && caixa2.value != ''){
       if(caixa1.value > 0 && caixa2.value > 0){ 

        document.getElementById('wavy').style.display = 'flex'
    setTimeout(function(){document.getElementById('wavy').style.display = 'none' }, 6000);
    setTimeout(function(){document.getElementById('sumi').style.display = 'block' }, 6000);



    res.classList.add('show') 
    rec.classList.add('show')
    b2.classList.add('show')
    var node = document.getElementById("formulario");
    if (node.parentNode) {
        node.parentNode.removeChild(node);}
    document.getElementById('resp').style.position = 'relative'
    document.getElementById("resp").innerHTML = '<h5 style="margin-top: 17px;">' + result + '</h5>'
    document.getElementById('recarregar').style.marginTop= '25px'     
    document.getElementById('resp').style.marginTop= '30px'     
    document.getElementById("conseguiu").style.marginTop= '100px'
    document.getElementById("recarregar").style.marginBottom= '20px'
    document.getElementById("borda2").style.display= 'block'
    }if(caixa1.value <= 0 || caixa2.value <= 0 ){
        document.getElementById('erro0').style.display = 'inline-block'
    }
    }
})


//Recarregar a página.
recarregar.addEventListener('click',()=>{
    document.location.reload(true);
})

//Função que calcula a fatorial.

function fatorial (a) {
    var b 
    b = 1

        for(i = a; i > 0; i--){
         b = b * i
        
         }
    return b 
           
}

//Função que calcula a Fibonacci.

function fibonacci (x) {
    if(x == 1){
        return x
    }else if(x == 2){
        return(x-1)
    }else{
        return( fibonacci(x-1) + fibonacci(x-2))
    }
}


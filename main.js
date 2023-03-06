segundos=document.getElementById('segundos')
display=document.getElementById('display')
cont=0
function mostrar(){
    
    if(display.innerHTML==='0'){
        cont=0
        return display.innerHTML='Finalizado'

    }else{
        if(cont==0){
            display.innerHTML=parseInt(segundos.value)
            cont=3
        }    
       return setTimeout(mostrar,1000,display.innerHTML= parseInt(--display.innerHTML))
       
    }

}
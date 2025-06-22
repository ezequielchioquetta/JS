
var data = new Date();
var diaSem = data.getDay()
/*
    0 = Domingo
    1 = segunda
    2 = terça
    3 = Quarta
    4 = Quinta 
    5 = Sexta 
    6 = Sábado
    */
   switch(diaSem){
        case 0:
            console.log('Domingo')
            break
        case 1:
            console.log('segunda')
            break
        case 2:
            console.log('terça')
            break   
         case 3:
            console.log('Quarta')
            break
        case 4:
            console.log('Quinta')
            break 
        case 5:
            console.log('sexta')
            break   
        case 6:
            console.log('sabado')
            break      
        default:
            console.log('[Erro] Dia invalido')  
            break               
   }
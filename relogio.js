
//colocando um intervalo
setInterval(setDate, 1000)

//criando constante pra pegar hora,minuto,segundo

//constante hora recebe [data-hour-hand] do html
const hora = document.querySelector('[data-hour-hand]');

//constante minuto recebe [data-minute-hand] do html
const minuto = document.querySelector('[data-minute-hand]');

//constante segundo recebe [data-second-hand] do html
const segundo = document.querySelector('[data-second-hand]');

//criando uma funcao para usar o setDate que criamos acima
function setDate(){

    //Atencao == coloquei o nome das constantes em ingles para diferencir das constantes anteriores declaradas 
    //currentDate e um funcao que pega a data de hoje minutos e segundos do navegador

    //data de hoje recebe nova data
    const currentDate = new Date();

    //constante seconds recebe nova data recebendo segundo divididos por 60 para dar os segundos
    const seconds = currentDate.getSeconds() / 60;

    //constante minuts recebe seconds mais currentDate dividido por 60 para dar os minutos
    const minutes = (seconds + currentDate.getMinutes()) /60;

    //constante hours = recebe minutes somando com currentDate e divide por 12 porque  o relogio e de formato de 12 horas 
    const hours = (minutes + currentDate.getHours()) /12;

    //colocando a rotacao nos ponteiros do html 

    //juntando os valores das constantes
    setRotation(segundo, seconds);
    setRotation(minuto, minutes);
    setRotation(hora, hours);

}

//criando funcao setRottion
function setRotation(element, rotationRatio) {

    //colocando propiedade de estilo
    //pegando o --rotation do css e determinando que ele gire em 360
    element.style.setProperty('--rotation',rotationRatio * 360);

}

//inciando a funcao setDate que  criamos
setDate()
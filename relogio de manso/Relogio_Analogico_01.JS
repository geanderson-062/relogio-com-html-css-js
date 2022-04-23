setInterval(() => //determinando um intervalo de 1000 milesegundos
    {
	d = new Date(); //criando vareavel d e instanciando o newDate 

	hr = d.getHours();//criando vareavel e instanciando os atributos da vareavel d
	min = d.getMinutes();//criando vareavel e instanciando os atributos da vareavel d
	seg = d.getSeconds();//criando vareavel e instanciando os atributos da vareavel d

	//nao entendi isso 
	hr_rotacao = 30 * hr + min / 2;
	min_rotacao = 6 * min;
	seg_rotacao = 6 * seg;

	//pegando atributos do css e transformamndo eles 'colocando para se mexer'
	hora.style.transform = `rotate(${hr_rotacao}deg)`;  // deg = degrees = graus 
	minuto.style.transform = `rotate(${min_rotacao}deg)`;
	segundo.style.transform = `rotate(${seg_rotacao}deg)`;

    }, 
1000 //valor do intervalo 'isso nao devia estar lá em cima?'
);

//
// 
// setInterval(): 
// Chama uma função em intervalos especificados (em milissegundos).
// método setInterval() continua chamando a função até que clearInterval() 
// seja chamado ou a janela seja fechada.


// OBS: 1 segundo = 1000 milissegundos.
//
// rotate(): 
// A função de transformação rotate() pode ser usada como o valor para girar o elemento. 
// Leva um parâmetro que define o ângulo de rotação. O ângulo de rotação consiste em duas 
// partes, o valor da rotação seguido pela unidade de rotação. A unidade pode ser definida 
// em graus (deg), gradiente (grad), radianos (rad) e voltas.
//

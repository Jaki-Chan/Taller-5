/* 1)Transformación avanzada con map(): 
    • Instrucción: Dado un array de objetos que representan 20 estudiantes 
    con sus nombres y notas, utiliza map() para crear un nuevo array que 
    contenga solo los nombres de los estudiantes aprobados (nota ≥ 60). */

    let estudiantes = [
        {nombre:"Carlos", nota:65 },    // 1
        {nombre:"Andres", nota:43 },    // 2
        {nombre:"Camilo", nota:57 },    // 3
        {nombre:"Maria", nota:78 },     // 4
        {nombre:"Fernando", nota:90 },  // 5
        {nombre:"Astrid", nota:83 },    // 6
        {nombre:"Luz", nota:24 },       // 7
        {nombre:"Cristian", nota:95 },  // 8
        {nombre:"Edison", nota:61 },    // 9
        {nombre:"Erika", nota:34 },     // 10
        {nombre:"Dayana", nota:60 },    // 11
        {nombre:"David", nota:59 },     // 12
        {nombre:"Sebastian", nota:45 }, // 13
        {nombre:"Nixon", nota:73 },     // 14
        {nombre:"Diana", nota:91 },     // 15
        {nombre:"Kevin", nota:99 },     // 16
        {nombre:"Luiz", nota:62 },      // 17
        {nombre:"Mafe", nota:15 },      // 18
        {nombre:"Chan", nota:100 },     // 19
        {nombre:"Angie", nota:99 },     // 20
        
    ]; 
    let estudiantesAprobados = estudiantes.filter(estudiantes => estudiantes.nota >= 60); 
    let nombreEstudiantes = estudiantesAprobados.map(estudiantesAprobados => estudiantesAprobados.nombre);
    console.log("1) nombre de estudiantes que aprobaron= ");
    console.log(nombreEstudiantes); 

    /* 2)Filtrado y manipulación con filter() y map(): 
    • Instrucción: Dado un array de 50 números, utiliza filter() para extraer 
    los números pares y luego aplica map() para duplicar cada uno de los 
    números filtrados. Imprime el nuevo array.*/

let numeros = [5,68,46,34,13,89,56,29,27,26,35,53,54,64,16,19,20,11,21,24,18,17,28,94,93,39,48,84,74,73,63,62,26,23,26,65,66,77,79,22,87,88,33,92,27,44,46,86,55,99]
let numerosPares = numeros.filter(numeros => numeros % 2 === 0);
let numerosDobles = numerosPares.map(numerosPares => numerosPares * 2);
console.log("");
console.log("2) Numeros pares duplicados");
console.log(numerosDobles);

    /* 3)Reducción compleja con reduce(): 
    • Instrucción: Dado un array que contiene los precios de 40 productos en 
    una tienda, utiliza reduce() para calcular el total con un descuento del 
    10% aplicado a cada precio.*/

let productos = [
    {producto:"Arroz", precio:2100},        //1
    {producto:"Lenteja", precio:1500},      //2
    {producto:"Frijol", precio:3500},       //3
    {producto:"Garbanzo", precio:2700},     //4
    {producto:"Arina Tr", precio:1200},     //5
    {producto:"Arina Mz", precio:1500},     //6
    {producto:"Galletas", precio:5400},     //7
    {producto:"Leche", precio:4100},        //8
    {producto:"Aceite", precio:35000},      //9
    {producto:"Pasta", precio:2300},        //10
    {producto:"Kelogs", precio:5400},       //11
    {producto:"Zukaritas", precio:5400},    //12
    {producto:"Saltin", precio:4800},       //13
    {producto:"Ducales", precio:4300},      //14
    {producto:"Mani", precio:2200},         //15
    {producto:"Carne", precio:18000},       //16
    {producto:"Pollo", precio:15000},       //17
    {producto:"Pezcado", precio:9000},      //18
    {producto:"Cerdo", precio:15500},       //19
    {producto:"Alitas BQR", precio:18000},  //20
    {producto:"Costillitas", precio:17800}, //21
    {producto:"Queso", precio:9000},        //22
    {producto:"Salchichas", precio:5400},   //23
    {producto:"Jamon", precio:4500},        //24
    {producto:"Pan", precio:3700},          //25
    {producto:"Lechuga", precio:1200},      //26
    {producto:"Tomate", precio:1300},       //27
    {producto:"Cebolla", precio:1400},      //28
    {producto:"Perejil", precio:500},       //29
    {producto:"Pimenton", precio:800},      //30
    {producto:"Papa", precio:1300},         //31
    {producto:"Sandia", precio:3000},       //32
    {producto:"Mora", precio:2500},         //33
    {producto:"Banano", precio:2000},       //34
    {producto:"Fresa", precio:4500},        //35
    {producto:"Lulo", precio:1800},         //36
    {producto:"Guallaba", precio:2300},     //37
    {producto:"Mango", precio:2800},        //38
    {producto:"Papaya", precio:5600},       //39
    {producto:"Freijoa", precio:3300},      //40
]
let descuento = productos.map(productos => productos.precio * (0.90))
console.log("");
console.log("3) procuctos con descuento del 10%= ");
console.log(descuento);
let totalCompra = descuento.reduce((total,valor) => total + valor, 0);
console.log("");
console.log("Total de la compra= ")
console.log(totalCompra);

    /* 4)Recorrido de arrays multidimensionales: 
    • Instrucción: Dada una matriz 4x4 con números aleatorios, utiliza 
    forEach o for...of para recorrer cada elemento y generar una nueva 
    matriz con los valores incrementados en 5.*/
    
let aleatorios = [
    [3,5,7,2],
    [5,8,3,1],
    [9,6,1,7],
    [3,5,8,2]
];
let multiplicar = 5;
console.log("");
console.log("4) incremento de matriz a 5= ");
aleatorios.forEach(aleatorio => aleatorio.map(num => console.log(num + 5)));

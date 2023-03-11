console.log("Pagina iniciada");

let cotizarAutomovil = null;
let marcaAutomovil = null;
let modeloAutomovil = null;
let anioAutomovil = null;
let cotizarOtroAutomovil = null;
let marca = null;
let modelo = null;
let anio = null;
let paso = 0;
let opcion = null;


/* Almaceno marcas en el array */
let arrayMarcas = ["Ford", "Chevrolet", "Fiat"];
/* Agrego marcas nuevas al arrayMarcas */
arrayMarcas.push("Citroen", "Peugeot");
console.log(arrayMarcas);
/* ejecuto el forEach*/
arrayMarcas.forEach((marca)=>{
    console.log(marca);
})


const ford = `
    Modelos
    1.- Ka
    2.- Focus 3
    3.- Mondeo
    4.- Fusion
`;

const chevrolet = `
    Modelos
    1.- Cruze
    2.- Onix
    3.- S10
    4.- Tracker
`;

const fiat = `
    Modelos
    1.- Toro
    2.- Bravo
    3.- Palio
    4.- Punto
`;


inicio();

/*  inicio funcion para tener opciones, ya sea para que pueda volver hacia atras, o salir */

function inicio(){
    console.log(`Opcion:${opcion}`);
    opcion = null;
    paso = 0;
    while(opcion == null || opcion != 0){    
        if(opcion == 9){
            paso--;
        } else if(opcion == 0){
            break;
        }else {
            if(paso != 5){
                paso++;
            } else {
                if(opcion == 1){
                    paso = 1;
                }
            }            
        }        
        opcion = resolverPaso(paso);    
    }
}

function resolverPaso(paso) {
    console.log(`Cargando paso: ${paso}`);
    switch (paso) {
        case 1:
            return paso1();           
        case 2:
            // Guardo la marca para poder cargar los modelos cuando se utiliza la opcion de volver.
            marca = paso2();
            return marca;
        case 3:
            modelo = paso3(); 
            return modelo;
        case 4:
            anio = paso4()
            return anio;
        case 5:
            return paso5();
        default:
            opcion = 0;
            break;
    }
};

function calcularModelos() {
    let modelos = '';
    switch (parseInt(marca)) {
        case 1:
            modelos = chevrolet;
            break;
        case 2:
            modelos = ford;
            break;
        case 3:
            modelos = fiat;
            break;
        default:
            break;
    }

    return modelos;
}

/* comienza el simulador con la opcion de cotizar o salir */

function paso1() {
    paso = 1;
    return window.prompt(`
        Bienvenido al Cotizador de Seguros de JP Seguros

        *- MENU (Elija una opcion)
            1.- Cotizar mi auto
            0.- Salir
    `);
}

/* elijo la marca de vehiculo que deseo cotizar ahora , con opcion de salir o volver hacia atras */

function paso2() {
    paso = 2;
    return window.prompt(`
    Seleccione la marca de su vehiculo
    
    *- Marca del Vehiculo (Elija una opcion)
        1.- Chevrolet
        2.- Ford
        3.- Fiat
    
        9.- Volver
        0.- Salir
    `);
}

/* selecciono el modelo del vehiculo a cotizar, con opcion de salir o volver hacia atras*/

function paso3() {
    paso = 3; 
    var modelos = calcularModelos(opcion);
    return window.prompt(`
    *- Seleccione el modelo
    ${modelos}

    9.- Volver
    0.- Salir
    `)
}

/* introduzco el año del vehiculo, con opcion de salir o volver hacia atras */

function paso4() {
    paso = 4;
    return window.prompt(`
        Introduzca Año del Vehiculo

        9.- Volver
        0.- Salir
    `)
}

/* me devuleve el resultado total, detalladamente ,con opcion de salir o volver a cotizar otro vehiculo */ 

function paso5() {
    paso = 5;
    let resultado = resultadoFinal();
    return prompt(`
        Su seguro mensual es de:
        ${resultado}
        1.- Cotizar otro Vehiculo
        0.- Salir
    `);
}

function resultadoFinal() {
    let resultado = 2000;
    let marcaImporte = 0;
    let modeloImporte = 0;
    let fechaImporte = 0;
   
    if (marca == 1) {
        marcaImporte = 750;
    } else if (marca == 2) {
        marcaImporte = 1300;
    } else {
        marcaImporte = 300;
    }
    
    if (marca == 1 && modelo == 3) {
        modeloImporte = 500;
    }

    if (anio >= 2021) {
        fechaImporte = 800;
    } else if (anio >= 2013 && anio >= 2021) {
        fechaImporte = 400;
    } else {
        fechaImporte = 100;
    }

    let total = resultado + marcaImporte + modeloImporte + fechaImporte;

    return `
        Impuesto por Base: $ ${resultado}
        Impuesto por Modelo: $ ${modeloImporte}
        Impuesto por Marca: $ ${marcaImporte}
        Impuesto por Antiguedad: $ ${fechaImporte}
        ---------------------------------------------
        Total: $ ${total}
    `

}

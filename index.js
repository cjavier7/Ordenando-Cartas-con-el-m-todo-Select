let iconos = ["♦", "♥", "♠", "♣"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let cartas = [];

let draw = document.querySelector("#draw");
let sort = document.querySelector("#sort");

draw.addEventListener('click', generarCartas)
sort.addEventListener('click', ordenarCartas) 


function generarCartas() {

    let container = document.querySelector("#container");

    container.innerHTML = "";


    let numeroCartas = parseInt(document.getElementById("amountcards").value);
    for (i = 1; i <= numeroCartas; i++) {
        function conseguirIcono() {
            let numero = Math.floor(Math.random() * iconos.length);

            return numero;
        }

        let icono = iconos[conseguirIcono()];
        console.log(icono);


        function conseguirNumero() {
            let numero = Math.floor(Math.random() * numeros.length);
            return numero;
        }

        let numero = numeros[conseguirNumero()];
        console.log(numero);



        let cartaNueva = document.createElement("div");
        let carta = container.appendChild(cartaNueva).classList.add("card");
        let iconoArriba = document.createElement("div")
        let iconoIzq = cartaNueva.appendChild(iconoArriba).classList.add("iconoArriba");
        iconoArriba.innerHTML = icono;
        let contenidoNumero = document.createElement("div")
        let elNumero = cartaNueva.appendChild(contenidoNumero).classList.add("number");
        contenidoNumero.innerHTML = changeValue(numero);
        let iconoAbajo = document.createElement("div")
        let iconoDere = cartaNueva.appendChild(iconoAbajo).classList.add("iconoAbajo");
        iconoAbajo.innerHTML = icono;

        if (icono == "♦" || icono == "♥") {
            iconoArriba.style.color = "red";
            iconoAbajo.style.color = "red";
        }

        let cartaConseguida = {
            iCono: icono,
            nUmero: numero,
        };
        cartas.push(cartaConseguida);
        console.log(cartaConseguida);
    }

    console.log(cartas);
    return cartas;

}



cartas = generarCartas(); 

function ordenarCartas() {
    
    let ordenado = document.querySelector("#ordenado");
    const len = cartas.length;
    ordenado.innerHTML = "";
    
    
    for (let i = 0; i < len - 1; i++) {

        let min = i; // 0
        for (let j = i + 1; j < len; j++) {
            if (cartas[j].nUmero < cartas[min].nUmero) {
                min = j
            }
        }
        if (min !== i) {
            const temp = cartas[i].nUmero
            cartas[i].nUmero = cartas[min].nUmero
            cartas[min].nUmero = temp

        }

        
        contenedor = document.createElement("div");
        contenedor.style.display = "flex" 
        
        
        for (x=0; x < len; x++){
            
            ordenado.appendChild(contenedor);
            let cartaNueva = document.createElement("div");
            let carta = contenedor.appendChild(cartaNueva);
            cartaNueva.classList.add("card");
            let iconoArriba = document.createElement("div")
            let iconoIzq = cartaNueva.appendChild(iconoArriba).classList.add("iconoArriba");
            iconoArriba.innerHTML = cartas[x].iCono;
            let contenidoNumero = document.createElement("div")
            let elNumero = cartaNueva.appendChild(contenidoNumero).classList.add("number");
            contenidoNumero.innerHTML = changeValue(cartas[x].nUmero);
            let iconoAbajo = document.createElement("div")
            let iconoDere = cartaNueva.appendChild(iconoAbajo).classList.add("iconoAbajo");
            iconoAbajo.innerHTML = cartas[x].iCono;
            if (cartas[x].iCono == "♦" || cartas[x].iCono == "♥") {
                iconoArriba.style.color = "red";
                iconoAbajo.style.color = "red";
            }
            
        
            console.log(contenedor);

        }


    }

    console.log(cartas);
    return cartas
    

};


function changeValue(value) {
    switch (value) {
        case 1: return "A";
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K";

        default: return value;
    }
}
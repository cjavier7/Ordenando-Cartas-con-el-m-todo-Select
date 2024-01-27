let iconos = ["♦", "♥", "♠", "♣"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];



let cartas = [];

let draw = document.querySelector("#draw");
let sort = document.querySelector("#sort");

function generadorCartas() {

    cartas = [];
    let parrilla = document.querySelector("#parrilla");

    parrilla.innerHTML = "";


    let numeroCartas = parseInt(document.getElementById("nCartas").value);
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


        /*let iconoIzq = document.querySelector(".iconLeft");
       let contenidoNumero = document.querySelector(".number");
       let iconoDerech = document.querySelector(".iconRight"); */





        let cartaNueva = document.createElement("div");
        let carta = parrilla.appendChild(cartaNueva).classList.add("card");
        let iconoIzquierda = document.createElement("div")
        let iconoIzq = cartaNueva.appendChild(iconoIzquierda).classList.add("iconLeft");
        iconoIzquierda.innerHTML = icono;
        let contenidoNumero = document.createElement("div")
        let elNumero = cartaNueva.appendChild(contenidoNumero).classList.add("number");
        contenidoNumero.innerHTML = changeValiu(numero);
        let iconoDerech = document.createElement("div")
        let iconoDere = cartaNueva.appendChild(iconoDerech).classList.add("iconRight");
        iconoDerech.innerHTML = icono;

        if (icono == "♦" || icono == "♥") {
            iconoIzquierda.style.color = "red";
            iconoDerech.style.color = "red";
        }

        let cartaValor = {
            iCono: icono,
            nUmero: numero,
        };
        cartas.push(cartaValor);
        console.log(cartaValor);
    }

    console.log(cartas);
    return cartas;

}


draw.addEventListener("click", generadorCartas);

cartas = generadorCartas();

function organizadorCartas() {
    let ordenado = document.querySelector("#ordenado");
    const len = cartas.length;
    ordenado.innerHTML ="";
    
    
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
        contenedor.style.display = "flex";
        
        for (x=0; x < len; x++){
            
            ordenado.appendChild(contenedor);
            let cartaNueva = document.createElement("div");
            let carta = contenedor.appendChild(cartaNueva);
            cartaNueva.classList.add("card");
            let iconoIzquierda = document.createElement("div")
            let iconoIzq = cartaNueva.appendChild(iconoIzquierda).classList.add("iconLeft");
            iconoIzquierda.innerHTML = cartas[x].iCono;
            let contenidoNumero = document.createElement("div")
            let elNumero = cartaNueva.appendChild(contenidoNumero).classList.add("number");
            contenidoNumero.innerHTML = changeValiu(cartas[x].nUmero);
            let iconoDerech = document.createElement("div")
            let iconoDere = cartaNueva.appendChild(iconoDerech).classList.add("iconRight");
            iconoDerech.innerHTML = cartas[x].iCono;
            if (cartas[x].iCono == "♦" || cartas[x].iCono == "♥") {
                iconoIzquierda.style.color = "red";
                iconoDerech.style.color = "red";
            }
            
        
            console.log(contenedor);

        }

        
        

    }

    console.log(cartas);
    return cartas
    

};


function changeValiu(value) {
    switch (value) {
        case 1: return "A";
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K";

        default: return value;
    }
}


sort.addEventListener("click", organizadorCartas);
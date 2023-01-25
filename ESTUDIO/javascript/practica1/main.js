class Animal{

    constructor(raza, peso, edad){
        this.raza = raza;
        this.peso = peso;
        this.edad = edad;
        this.info = `Raza: ${this.raza} peso: ${peso} Kilos edad: ${edad} años`;
    }

    mostrarInfo(){
        if(this.peso<22){
            this.informacion = this.info;
            document.write(this.informacion + ' debe subir de peso' + "<br>");
        }
        if(this.peso>26){
            this.informacion = this.info;
            document.write(this.informacion +' debe bajar de peso' + "<br>");
        }
        if(this.peso>=22 && this.peso<=26){
            this.informacion = this.info;
        document.write(this.informacion + ' esta en el peso perfecto' + "<br>");
        }

        
    }
}

const perro1 = new Animal('numero1', 20, 7);
const perro2 = new Animal('numero2', 23, 7);
const perro3 = new Animal('numero3', 54, 6);
const perro4 = new Animal('numero4', 25, 2);
const perro5 = new Animal('numero5', 21, 8);
const perro6 = new Animal('numero6', 27, 4);
const perro7 = new Animal('numero7', 24, 9);
const perro8 = new Animal('numero8', 29, 5);
const perro9 = new Animal('numero9', 22, 2);


perro1.mostrarInfo();
perro2.mostrarInfo();
perro3.mostrarInfo();
perro4.mostrarInfo();
perro5.mostrarInfo();
perro6.mostrarInfo();
perro7.mostrarInfo();
perro8.mostrarInfo();
perro9.mostrarInfo();

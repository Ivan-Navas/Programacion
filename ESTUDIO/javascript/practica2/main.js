// class Animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.color = color;
//         this.edad = edad;
//         this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
//     }

//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }

// class Perro extends Animal{
//     constructor(especie,edad,color, raza){
//         super(especie, edad, color,);
//         this.raza = raza;
//     }
//     Ladrar(){
//         alert("Ladarando..." );
//     }

// }

// const perro1 = new Animal("Perro", 2, "Negro");
// const perro2 = new Perro("Perro", 3, "Marron", "Chiwawa")
// perro1.verInfo();
// perro2.Ladrar();
// perro2.verInfo();

class Animal2 {
  constructor(especie, edad, peso) {
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.info = `Especie: ${this.especie} edad: ${this.edad} peso: ${this.peso}`;
  }

  mostrarInfo() {
    document.write(this.info);
  }
}

class Perro2 extends Animal {
  constructor(especie, edad, peso, raza) {
    super(especie, edad, peso);
    this.raza = raza;
  }
  static Ladrar() {
    alert("waw");
  }
}

const perro = new Animal2("perro", 2, 20);
perro.mostrarInfo();
Perro2.Ladrar();

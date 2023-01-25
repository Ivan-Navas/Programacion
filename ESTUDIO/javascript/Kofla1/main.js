class Celular{
  constructor(resolucion, ram, color){
    this.resolucion = resolucion;
    this.ram = ram;
    this.color = color;
    this.apagado = true;
  }
  //encender, reiniciar, apagar, tomar foto

  Encender(){
    if(this.apagado = true){
      alert("encendiendo el celular...");
      this.apagado = false;
    }
    else{
      alert("El celular ya esta encendido");
    }
  }
  Reiniciar(){
    if(this.apagado = false){
      alert("Reiniciando...");
      this.apagado = false;
    }else{
      alert("El celular esta apagdo");
    }
  }
  
  Apagar(){
    if(this.apagado= false){
      alert("Apagando el celular...");
      this.apagado = true
    }else{
      alert("El celular ya esta apagado");
    }
  }

  tomarFoto(){
    if(this.apagado = false){
      alert(`Foto tomada en una resolucion de: ${this.resolucion}`);
    }else{
      alert("El celular esta apagado");
    }
  }

  mostrarInfo(){
    return `
    Color: ${this.color} <br>
    RAM: ${this.ram} <br>
    Resolucion: ${this.resolucion}
    `
  }
}

const celular1 = new Celular("Full HD", "6GB", "Negro");

document.write(celular1.mostrarInfo());

celular1.Encender();
celular1.tomarFoto();
celular1.Reiniciar();
celular1.Apagar();
